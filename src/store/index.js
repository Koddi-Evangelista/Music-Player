import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songs: [
      {
        artist: "Sleepmakeswaves",
        song: "It's Dark, It's Cold, I'ts Winter",
        slug: require("@/assets/itsdark.mp3"),
        cover: require("@/assets/smwimg.jpg"),
      },
      {
        artist: "Death Grips",
        song: "Guillotine",
        slug: require("@/assets/guillotine.mp3"),
        cover: require("@/assets/dgimg.jpg"),
      },
      {
        artist: "Joy wants Eternity",
        song: "From Embrace to Embrace",
        slug: require("@/assets/embrace.mp3"),
        cover: require("@/assets/jweimg.jpg"),
      },
      {
        artist: "Com Truise",
        song: "Cyanide Sisters",
        slug: require("@/assets/cyanideSisters.mp3"),
        cover: require("@/assets/ctimg.jpg"),
      },
      {
        artist: "Best Coast",
        song: "The Only Place",
        slug: require("@/assets/place.mp3"),
        cover: require("@/assets/bcimg.jpg"),
      },
    ],
    index: 0,
  },
  getters: {
    songPlaying: (state) => state.songs[state.index],
  },
  mutations: {
    prev: (state) => {
      if (state.index === 0) {
        return (state.index = state.songs.length - 1);
      } else {
        return (state.index = state.index - 1);
      }
    },
    next: (state) => {
      if (state.index === state.songs.length - 1) {
        return (state.index = 0);
      } else {
        return (state.index = state.index + 1);
      }
    },
  },
  actions: {},
  modules: {},
});
