const users = {
  namespaced: true,
  state: {
    users: [],
    currentUser: null,
    isLogin: false
  },
  mutations: {
    ADD_USER(state, payload) {
      payload.favorites = [];
      state.users.push(payload);
    },
    SET_CURRENT_USER(state, payload) {  
      const index = state.users.findIndex(
        (obj) =>
          obj.userName === payload.user.userName && obj.password === payload.user.password
      );
      if (index !== -1) {
        state.currentUser = state.users[index];
        state.isLogin = payload.status;
      }
    } ,
    LOG_OUT(state,payload){
      state.currentUser = null;
      state.isLogin = payload
      console.log(state.isLogin)
    }
  },
  actions: {
    ADD_USER({ commit }, payload) {
      commit("ADD_USER", payload);
    },
    SET_CURRENT_USER({ commit }, payload) {
      commit("SET_CURRENT_USER", payload);
    }
  },
  getters: {
    currentUser: (state) => state.currentUser,
    isLogin: (state) => state.isLogin,
  },
};

export default users;
