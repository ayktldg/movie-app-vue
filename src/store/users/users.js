const users = {
  namespaced: true,
  state: {
    users: [],
    currentUser: null,
    isLogin: false,
  },
  mutations: {
    ADD_USER(state, payload) {
      payload.favorites = [];
      state.users.push(payload);
    },
    SET_CURRENT_USER(state, payload) {
      const index = state.users.findIndex(
        (obj) =>
          obj.userName === payload.user.userName &&
          obj.password === payload.user.password
      );
      if (index !== -1) {
        state.currentUser = state.users[index];
        state.isLogin = payload.status;
      }
    },
    LOG_OUT(state, payload) {
      state.currentUser = null;
      state.isLogin = payload;
    },
    ADD_FAVORITES(state, payload) {
      const index = state.users.findIndex(
        (obj) => obj.id === state.currentUser.id
      );
      state.users[index].favorites.push(payload);
    },
    REMOVE_FAVORITES(state, payload) {
      const index = state.users.findIndex(
        (obj) => obj.id === state.currentUser.id
      );
      const movieIndex = state.users[index].favorites.findIndex(
        (movie) => movie.id === payload.id
      );
      state.users[index].favorites.splice(movieIndex, 1);
    },
  },
  actions: {
    ADD_USER({ commit }, payload) {
      commit("ADD_USER", payload);
    },
    SET_CURRENT_USER({ commit }, payload) {
      commit("SET_CURRENT_USER", payload);
    },
    ADD_FAVORITES({ commit }, payload) {
      commit("ADD_FAVORITES", payload);
    },
    REMOVE_FAVORITES({ commit }, payload) {
      commit("REMOVE_FAVORITES", payload);
    },
    LOG_OUT({ commit }, payload) {
      commit("LOG_OUT", payload);
    },
  },
  getters: {
    currentUser: (state) => state.currentUser,
    isLogin: (state) => state.isLogin,
    favorites: (state) => {
      const index = state.users.findIndex(
        (obj) => obj.id === state.currentUser.id
      );
      return state.users[index].favorites;
    },
  },
};

export default users;
