<template>
  <div id="nav">
    <span id="logo">VUE MUSIC PLAYER</span>
    <router-link id="menu" to="/menu">Menu</router-link>
  </div>
</template>
<script>
export default {
  name: "TheNavigation"
};
</script>
<style>
#nav {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-items: center;
  color: white;
  padding: 0 1rem;
  background-color: #222;
}
#menu {
  justify-self: end;
}
</style>