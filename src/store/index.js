import Vue from "vue";
import Vuex from "vuex";
import apiUrl from '../utils/axios'

Vue.use(Vuex);

const axios = require("axios");

export default new Vuex.Store({
  state: {
    movies: [],
    movieDetail: {},
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
    setMovie({ commit }, payload) {
      axios
        .get(
          `${apiUrl.baseUrl}movie/${payload}`, {params: { api_key: apiUrl.apiKey }}
        )
        .then((response) => {
          commit("setMovie", response.data.results);
        });
    },
    searchMovie({ commit }, payload) {
      axios
        .get(
          `${apiUrl.baseUrl}search/movie/`, {params: { api_key: apiUrl.apiKey, query: payload}}
        )
        .then((response) => {
          commit("setMovie", response.data.results);
        });
    },
    setMovieDetail( { commit }, payload) {
      axios
        .get(
          `${apiUrl.baseUrl}movie/${payload}`, {params: { api_key: apiUrl.apiKey, append_to_response: 'videos' }}
        )
        .then((response) => {
          commit("setMovieDetail", response.data);
        });
    }
  },
  modules: {},
});
