<template>
  <div>
    <nav class="navbar navbar-expand-sm p-3">
      <div class>
        <router-link to="/" class="logo nav-link font-weight-bold">TMDB</router-link>
      </div>
      <div class="links d-flex justify-content-center ml-auto">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/top-rated" class="nav-link">Top Rated</router-link>
        <router-link to="/now-playing" class="nav-link">Now Playing</router-link>
        <router-link to="/upcoming" class="nav-link">Upcoming</router-link>
        <router-link v-if="isLogin" to="/watchlist" class="nav-link">Watchlist</router-link>
      </div>
      <div class="login d-flex ml-auto">
        <button
          type="button"
          @click="loginHandler"
          class="nav-link btn btn-light btn-sm text-dark font-weight-bold mr-4"
        >{{isLogin ? 'Logout': 'Login'}}</button>
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
.navbar {
  background-color: rgb(11, 4, 44);
}
.nav-link {
  color: white;
}
.nav-link:hover {
  opacity: 0.8;
}
.logo {
  cursor: pointer;
  font-size: 3em;
  line-height: 1;
}
</style>