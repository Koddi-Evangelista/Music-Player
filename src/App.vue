<template>
  <div id="app">
    <the-navigation />
    <router-view />
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation.vue";
export default {
  components: {
    TheNavigation
  },
  data() {
    return {};
  }
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background-image: url("./assets/bg.jpg");
  background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.65)
  );
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
