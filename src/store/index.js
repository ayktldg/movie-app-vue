import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const axios = require("axios");

export default new Vuex.Store({
  state: {
    movies: [],
  },
  mutations: {
    setMovie(state, payload) {
      state.movies = payload;
    },
  },
  actions: {
    setMovie({ commit }, payload) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${payload}?api_key=6493a6123f5162ff2ff9776e58dd41de`
        )
        .then((response) => {
          commit("setMovie", response.data.results);
        });
    },
    searchMovie({ commit }, payload) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie/?api_key=6493a6123f5162ff2ff9776e58dd41de&query=${payload}`
        )
        .then((response) => {
          commit("setMovie", response.data.results);
        });
    },
  },
  modules: {},
});
