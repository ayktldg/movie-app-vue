import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const axios = require('axios');

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    setMovie(state,payload){
      state.movies = payload;
    }
  },
  actions: {
    async setMovie({commit}, payload) {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${payload}?api_key=6493a6123f5162ff2ff9776e58dd41de`);
        console.log(response.data.results);
        commit('setMovie',response.data.results)
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {}
});
