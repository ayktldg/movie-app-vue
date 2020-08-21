import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/top-rated",
    name: "TopRated",
    component: () =>
      import(/* webpackChunkName: "top-rated" */ "../views/TopRated.vue"),
  },
  {
    path: "/now-playing",
    name: "NowPlaying",
    component: () =>
      import(/* webpackChunkName: "now-playing" */ "../views/NowPlaying.vue"),
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    component: () =>
      import(/* webpackChunkName: "upcoming" */ "../views/Upcoming.vue"),
  },
  {
    path: "/search/:name",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/SearchedMovies.vue"),
  },
  {
    path: "/movie-detail/:id",
    name: "MovieDetail",
    component: () =>
      import(/* webpackChunkName: "movie-detail" */ "../views/MovieDetail.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/user/Register.vue"),
    beforeEnter: (to, from, next) => {
      const isLogin = store.getters["users/isLogin"];
      if (isLogin) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/user/Login.vue"),
  },
  {
    path: "/watchlist",
    name: "Watchlist",
    component: () =>
      import(/* webpackChunkName: "watchlist" */ "../views/user/Watchlist.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
