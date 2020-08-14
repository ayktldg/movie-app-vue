import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const axios = require("axios");

export default new Vuex.Store({
  state: {
    movies: [],
    movieDetail: null,
    baseImageUrl: "https://image.tmdb.org/t/p/w500/",
  },
  mutations: {
    setMovie(state, payload) {
      state.movies = payload;
    },
    setMovieDetail(state, payload){
      state.movieDetail = payload;
    },
  },
  actions: {
    setMovie({ commit }) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=6493a6123f5162ff2ff9776e58dd41de`
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
    setMovieDetail( { commit }, payload) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${payload}?api_key=6493a6123f5162ff2ff9776e58dd41de&append_to_response=videos`
        )
        .then((response) => {
          commit("setMovieDetail", response.data);
        });
    }
  },
  modules: {},
});
