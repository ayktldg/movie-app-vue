<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/top-rated" class="nav-link">Top Rated</router-link>
      <router-link to="/now-playing" class="nav-link">Now Playing</router-link>
      <router-link to="/upcoming" class="nav-link">Upcoming</router-link>
      <button @click="loginHandler" class="nav-link ml-auto">{{isLogin ? 'Logout': 'Login'}}</button>
    </nav>
  </div>
</template>

<script>
 import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("users");   

export default {
   data() {
    return {
      status: "Login"
    };
  }, 
  methods: {
    loginHandler() {
      if (this.isLogin) {
        this.$store.commit("users/LOG_OUT", false);
      } else {
        this.$router.push("/login");
      }
    }
  },
  computed: {
    ...mapGetters({isLogin: 'isLogin'})
    }
};
</script>

<style scoped>
</style>