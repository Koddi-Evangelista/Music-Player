<template>
  <div class="musicNav">
    <div class="img">
      <img :src="songPlaying.cover" alt="" />
    </div>
    <div class="buttons">
      <div class="button prev" tabindex="0" @click="prev">
        <img src="@/assets/prev.png" alt="" />
      </div>
      <div
        v-show="!playButtonClicked"
        class="button play"
        tabindex="0"
        @click="play"
      >
        <img src="@/assets/play.png" alt="" />
      </div>
      <div
        v-show="playButtonClicked"
        class="button play"
        tabindex="0"
        @click="pause"
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
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      playButtonClicked: false,
      player: new Audio(),
      volumeVal: 0.9999999999990001,
      volumeButtonClicked: 3,
    };
  },
  methods: {
    prev() {
      this.$store.commit("prev");
      this.player.src = this.audio;
      this.play();
    },
    next() {
      this.$store.commit("next");
      this.player.src = this.audio;
      this.play();
    },
    play() {
      this.player.play();
      this.playButtonClicked = true;
    },
    pause() {
      this.player.pause();
      this.playButtonClicked = false;
    },
    volume() {
      if (this.volumeVal === 0.9999999999990001) {
        this.volumeVal = 0;
        this.player.volume = this.volumeVal;
        this.volumeButtonClicked = 0;
      } else {
        this.volumeVal += 0.333333333333;
        this.player.volume = this.volumeVal;
        this.volumeButtonClicked++;
      }
      console.log(this.volumeButtonClicked);
    },
  },
  computed: {
    ...mapGetters(["songPlaying"]),
    audio() {
      return this.songPlaying.slug;
    },
    index() {
      return this.$store.state.index;
    },
    duration() {
      return this.player.currentTime;
    },
    volumeSrc() {
      if (this.volumeButtonClicked > 0) {
        return require(`@/assets/volume${this.volumeButtonClicked}.png`);
      }
      return require("@/assets/mute.png");
    },
  },
  created() {
    this.player.src = this.audio;
  },
  update() {
    this.player.ended(this.next);
  },
};
</script>
<style>
.musicNav {
  padding: 0.5rem;
  width: 90%;
  height: 30vh;
  margin: 1rem auto;
  background-color: #fff;
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
  justify-content: space-between;
  align-items: center;
}
.button {
  width: 5%;
  height: 30%;
  cursor: pointer;
}
.button img {
  width: 100%;
  height: 100%;
}
</style>
