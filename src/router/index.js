import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
    path: "/is-showing",
    name: "IsShowing",
    component: () =>
      import(/* webpackChunkName: "is-showing" */ "../views/IsShowing.vue"),
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
    path: "/movie-detail",
    name: "MovieDetail",
    component: () =>
      import(/* webpackChunkName: "movie-detail" */ "../views/MovieDetail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
