import httpService from "../../utils/axios";
import API from "../../api/index";

const movies = {
  namespaced: true,
  state: {
    movies: [],
    movieDetail: {},
    cast: [],
    trailerIsShowing: false
  },
  mutations: {
    SET_MOVIE(state, payload) {
      state.movies = payload.filter(obj => obj.poster_path !== null);
    },
    SET_MOVIE_DETAIL(state, payload) {
      state.movieDetail = payload;
    },
    SET_MOVIE_CAST(state, payload) {
      state.cast = payload.filter(obj => obj.profile_path !== null)
    },
    CHANGE_TRAILER_STATUS(state,payload){
      state.trailerIsShowing = payload;
    }
  },
  actions: {
    SET_MOVIE({ commit }, payload) {
      httpService
        .get(`${API.MOVIE}${payload}`, { params: { api_key: API.API_KEY } })
        .then((response) => {
          commit("SET_MOVIE", response.data.results);
        });
    },
    SEARCH_MOVIE({ commit }, payload) {
      httpService
        .get(`${API.SEARCH}${API.MOVIE}`, {
          params: { api_key: API.API_KEY, query: payload },
        })
        .then((response) => {
          commit("SET_MOVIE", response.data.results);
        });
    },
    SET_MOVIE_DETAIL({ commit }, payload) {
      httpService
        .get(`${API.MOVIE}${payload}`, {
          params: { api_key: API.API_KEY, append_to_response: "videos" },
        })
        .then((response) => {
          commit("SET_MOVIE_DETAIL", response.data);
        });
    },
    SET_MOVIE_CAST({ commit }, payload) {
      httpService
        .get(`${API.MOVIE}${payload}${API.CREDITS}`, {
          params: { api_key: API.API_KEY },
        })
        .then((response) => {
          commit("SET_MOVIE_CAST", response.data.cast);
        });
    },
    CHANGE_TRAILER_STATUS({commit},payload){
      commit('CHANGE_TRAILER_STATUS',payload);
    }
  },
  getters: {
    movies: (state) => state.movies,
    movieDetail: (state) => state.movieDetail,
    cast: (state) => state.cast,
    trailerIsShowing: state => state.trailerIsShowing
  },
};

export default movies;
