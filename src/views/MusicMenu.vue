<template>
  <div class="music-cont">
    <h1>PLAYLIST</h1>
    <ul>
      <li v-for="(song, index) in songs" :key="index">
        <div class="song">
          <p class="title">{{ song.song }}</p>
          <p class="artist">{{ song.artist }}</p>
        </div>
        <div class="img">
          <img :src="song.cover" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "MusicMenu",
  computed: {
    ...mapState(["songs"])
  }
};
</script>
<style scoped>
.music-cont {
  margin-top: 1rem;
  width: 100%;
}
h1 {
  color: white;
}
ul {
  list-style-type: none;
  width: 80%;
  height: 80vh;
  margin: 1rem auto;
  overflow: auto;
}
li {
  width: 100%;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.5rem;
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.song {
  max-width: 60%;
  overflow: auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
</style>
