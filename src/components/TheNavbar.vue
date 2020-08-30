<template>
  <div>
    <nav class="navigation navbar navbar-expand-lg py-4">
      <router-link class="logo navbar-brand font-weight-bold text-white  ml-3" to="/">TMDB</router-link>
      <button
        class="navbar-toggler btn-sm bg-light mr-4"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg class="icon icon-menu">
          <use xlink:href="#icon-menu" />
        </svg>
        <symbol id="icon-menu" viewBox="0 0 32 32">
          <path d="M2 6h28v6h-28zM2 14h28v6h-28zM2 22h28v6h-28z"></path>
        </symbol>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">
              Home
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/top-rated">Top Rated</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link" to="/now-playing">Now Playing</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link" to="/upcoming">Upcoming</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link v-if="isLogin" class="nav-link" to="/watchlist">Watchlist</router-link>
          </li>
        </ul>
        <div class="login my-2 my-lg-0 mr-4">
          <button
            class="btn btn-light my-2 my-sm-0 text-dark font-weight-bold"
            type="button"
            @click="loginHandler"
          >{{isLogin ? 'Logout': 'Login'}}</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheNavbar",
  data() {
    return {
      status: "Login"
    };
  },
  methods: {
    loginHandler() {
      if (this.isLogin) {
        this.$store.dispatch("users/LOG_OUT", false);
      } else {
        this.$router.push("/login");
      }
    }
  },
  computed: {
    ...mapGetters({ isLogin: "users/isLogin" })
  }
};
</script>
<style scoped>
.navigation {
  background-color: rgb(11, 4, 44);
}
.nav-link {
  color: white;
}
.nav-link:hover,
.icon:hover,
.logo:hover {
  opacity: 0.8;
}
.logo {
  cursor: pointer;
  font-size: 2.5em;
  line-height: 1;
}
.icon {
  display: inline-block;
  width: 1.3em;
  height: 1.3em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  color: rgb(11, 4, 44);
}
</style>