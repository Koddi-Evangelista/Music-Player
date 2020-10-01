<template>
  <div id="nav">
    <span id="logo">VUE MUSIC PLAYER</span>
    <router-link to="/menu">Menu</router-link>
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
  justify-content: space-between;
  padding: 0 1rem;
  background-color: #222;
}
#logo {
  font-weight: 800;
  font-size: 1.4rem;
  animation: color 10s linear infinite alternate;
}
@keyframes color {
  0% {
    color: #181fe1;
  }
  10% {
    color: #212591;
  }
  20% {
    color: #3f3059;
  }
  30% {
    color: #7f3a69;
  }
  40% {
    color: #c2386b;
  }
  50% {
    color: #c43346;
  }
  60% {
    color: #a82a38;
  }
  70% {
    color: #d34639;
  }
  80% {
    color: #a28a46;
  }
  90% {
    color: #9cb57a;
  }
  100% {
    color: #338d5d;
  }
}
#nav a {
  font-weight: bold;
  color: whitesmoke;
}
</style>