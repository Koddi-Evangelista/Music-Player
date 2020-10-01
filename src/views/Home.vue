<template>
  <div class="home">
    <music-playing />
    <music-navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import MusicPlaying from "@/components/MusicPlaying.vue";
import MusicNavigation from "@/components/MusicNavigation.vue";
export default {
  name: "Home",
  components: {
    MusicPlaying,
    MusicNavigation
  }
};
</script>
