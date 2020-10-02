<template>
  <div class="musicNav">
    <div class="img">
      <img :src="songPlaying.cover" alt="" />
    </div>
    <div class="buttons">
      <div class="progressBar">
        <div class="progress">
          <div class="progressColored" :style="animate"></div>
        </div>
      </div>
      <div class="button-cont">
        <div class="button prev" tabindex="0" @click="prev">
          <img src="@/assets/prev.png" alt="" />
        </div>
        <div
          v-show="!playButtonClicked"
          class="button play"
          tabindex="0"
          @click="playMusic"
        >
          <img src="@/assets/play.png" alt="" />
        </div>
        <div
          v-show="playButtonClicked"
          class="button play"
          tabindex="0"
          @click="pauseMusic"
        >
          <img src="@/assets/pause.png" alt="" />
        </div>
        <div class="button next" tabindex="0" @click="next">
          <img src="@/assets/next.png" alt="" />
        </div>
        <div class="button next" tabindex="0" @click="volume">
          <img :src="volumeSrc" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      playButtonClicked: false,
      player: new Audio(), //to create a new html audio element
      volumeVal: 0.9999999999990001,
      volumeButtonClicked: 3,
      time: 0
    };
  },
  methods: {
    prev() {
      this.$store.commit("prev");
      this.player.src = this.audio;
      setTimeout(() => {
        //to make sure that the new value of this.player is set we set a delay of 5milliseconds before we play the music
        this.playMusic();
      }, 500);
    },
    next() {
      this.$store.commit("next");
      this.player.src = this.audio;
      setTimeout(() => {
        //to make sure that the new value of this.player is set we set a delay of 5milliseconds before we play the music
        this.playMusic();
      }, 500);
    },
    playMusic() {
      this.player.play();
      this.$store.commit("durationManip", this.player.duration); //to get the duration of the music
      this.playButtonClicked = true;
    },
    pauseMusic() {
      this.player.pause();
      this.playButtonClicked = false;
    },
    volume() {
      //to change the volume of the music
      if (this.volumeVal === 0.9999999999990001) {
        this.volumeVal = 0;
        this.player.volume = this.volumeVal;
        this.volumeButtonClicked = 0;
      } else {
        this.volumeVal += 0.333333333333;
        this.player.volume = this.volumeVal;
        this.volumeButtonClicked++;
      }
    }
  },
  computed: {
    ...mapGetters(["songPlaying"]),
    ...mapState(["index", "duration"]),
    audio() {
      //path for the audio
      return this.songPlaying.slug;
    },
    volumeSrc() {
      //to change the icon of the volume
      if (this.volumeButtonClicked > 0) {
        return require(`@/assets/volume${this.volumeButtonClicked}.png`);
      }
      return require("@/assets/mute.png");
    },
    animate() {
      return { width: `${this.time}%` };
    }
  },
  created() {
    this.player.src = this.audio;
    this.player.addEventListener("timeupdate", () => {
      //to get the current time of the audio
      this.time = (this.player.currentTime / this.duration) * 100;
      if (this.time === 100) {
        this.next();
      }
    });
  }
};
</script>
<style>
.musicNav {
  padding: 0.5rem;
  width: 90%;
  height: 30vh;
  margin: 1rem auto;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  display: flex;
}
.img {
  width: 20%;
  height: 100%;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.buttons {
  width: 80%;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.button-cont {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.progressBar {
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
}
.progress {
  position: relative;
  width: 100%;
  height: 20px;
  background-color: #999;
  border-radius: 50px;
  overflow: hidden;
}
.progressColored {
  position: absolute;
  top: 0;
  left: 0;
  width: 0px;
  height: inherit;
  border-radius: inherit;
  background: linear-gradient(to right, #455036, #153c25);
  animation: colorChange 5s infinite;
}
@keyframes colorChange {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
.button {
  width: 5%;
  height: 30%;
  cursor: pointer;
  filter: invert(1);
}
.button img {
  width: 100%;
  height: 100%;
}
</style>
