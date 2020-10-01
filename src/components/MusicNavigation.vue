<template>
  <div class="musicNav">
    <div class="img">
      <img src="@/assets/bg.jpg" alt="" />
    </div>
    <audio controls id="aud">
      <source :src="require(`@/assets/media/${audio}`)" type="audio/mp3" />
    </audio>
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
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
const SLUG = document.getElementById("aud");
export default {
  data() {
    return {
      playButtonClicked: false
    };
  },
  methods: {
    ...mapMutations(["prev", "next"]),
    play() {
      SLUG.play();
      this.playButtonClicked = true;
    },
    pause() {
      SLUG.pause();
      this.playButtonClicked = false;
    }
  },
  computed: {
    ...mapGetters(["songPlaying"]),
    audio() {
      return this.songPlaying.slug;
    },
    index() {
      return this.$store.state.index;
    }
  }
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button {
  width: 5%;
  height: 30%;
}
.button img {
  width: 100%;
  height: 100%;
}
audio {
  display: none;
}
</style>
