import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songs: [
      {
        artist: "Sleepmakeswaves",
        song: "It's Dark, It's Cold, I'ts Winter",
        slug: "itsdark.mp3"
      },
      {
        artist: "Death Grips",
        song: "Guillotine",
        slug: "guillotine.mp3"
      },
      {
        artist: "Joy wants Eternity",
        song: "From Embrace to Embrace",
        slug: "embrace.mp3"
      },
      {
        artist: "Com Truise",
        song: "Cyanide Sisters",
        slug: "cyanideSisters.mp3"
      },
      {
        artist: "Best Coast",
        song: "The Only Place",
        slug: "place.mp3"
      }
    ],
    index: 0
  },
  getters: {
    songPlaying: state => state.songs[state.index]
  },
  mutations: {
    prev: state => {
      if (state.index === 0) {
        return (state.index = state.songs.length - 1);
      } else {
        return (state.index = state.index - 1);
      }
    },
    next: state => {
      if (state.index === state.songs.length - 1) {
        return (state.index = 0);
      } else {
        return (state.index = state.index + 1);
      }
    }
  },
  actions: {},
  modules: {}
});
