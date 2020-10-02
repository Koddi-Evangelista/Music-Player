<template>
  <div class="songPlaying">
    <div class="texts">
      <h1>{{ songPlaying.song }}</h1>
      <h2>{{ songPlaying.artist }}</h2>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "MusicPlaying",
  computed: {
    ...mapGetters(["songPlaying"])
  }
};
</script>
<style scoped>
div.songPlaying {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  position: relative;
  width: 90%;
  margin: 1rem auto;
  height: 20vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  color: white;
  overflow: hidden;
}
div.songPlaying::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  filter: blur(10px);
}
.texts {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  animation: move 10s ease infinite;
}
@keyframes move {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(200%);
  }
}
</style>
