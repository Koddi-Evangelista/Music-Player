import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songPlaying: {
      artist: "alol bi nanamol",
      song: "hail the king pachala",
      duration: "04:12",
    },
    songs: [
      {
        artist: "Kodi Angelo",
        song: "high",
        duration: "04:15",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
