<template>
  <div class="songPlaying">
    <div class="texts">
      <h1>{{ songPlaying.song }}</h1>
      <h3>{{ songPlaying.artist }}</h3>
    </div>
    <div class="time">hahahhaha</div>
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
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  position: relative;
  width: 90%;
  margin: 1rem auto;
  height: 20vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  color: white;
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
  width: 60%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 100%;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0.5rem;
}
</style>
