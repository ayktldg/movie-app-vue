<template>
  <div class="container mt-4 mb-5 col-6 p-3">
    <h2 class="mb-5 text-center">Please sign in.</h2>
    <div v-if="message" class="mb-3 bg-danger p-2 text-center">
      <p class="text-white mb-0">{{message}}</p>
    </div>
    <form @submit.prevent="onLogin">
      <div class="form-group">
        <label for="inputUsername">Username</label>
        <input
          type="text"
          class="form-control"
          id="inputUsername"
          placeholder="Username"
          v-model="user.userName"
        />
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input
          type="password"
          class="form-control"
          id="inputPassword"
          placeholder="Password"
          v-model="user.password"
        />
      </div>
      <button type="submit" class="btn font-weight-bold text-white btn-block">Login</button>
      <div class="mt-4 text-center">
        <router-link to="/register" class="text-dark">
          Not an User?
          <strong>Create account</strong>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("users");

export default {
  name: "Login",
  data() {
    return {
      user: {
        userName: "",
        password: ""
      },
      message: ""
    };
  },
  computed: {
    ...mapGetters({ currentUser: "currentUser" })
  },
  methods: {
    onLogin() {
      this.$store.dispatch("users/SET_CURRENT_USER", {
        user: this.user,
        status: true
      });
      if (this.currentUser !== null) {
        this.$router.push("/");
      } else {
        this.message = "User not found. check the login information";
      }
    }
  }
};
</script>

<style scoped>
.btn {
  background-color: rgb(11, 4, 44);
}
</style>