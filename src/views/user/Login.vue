<template>
  <div class="container mt-3">
    <template v-if="message">
      <h5>{{message}}</h5>
    </template>
    <form @submit.prevent="onLogin">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <div class="mb-3">
        <label for="inputUserName" class="sr-only">Username</label>
        <input
          type="text"
          v-model="user.userName"
          id="inputUserName"
          class="form-control"
          placeholder="Username"
          required
          autofocus
        />
      </div>
      <div class="mt-3">
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          type="password"
          v-model="user.password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>
      <button class="mt-3 btn btn-lg btn-primary btn-block" type="submit">
        <span class="pr-2">Sign in</span>
        <!-- <div class="spinner-border text-light" role="status" v-if="loading">
          <span class="sr-only">Loading...</span>
        </div>-->
      </button>
      <router-link to="/register">
        Not an User?
        <strong>Create account</strong>
      </router-link>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers('users')

export default {
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
    //...mapActions({ setCurrentUser: "SET_CURRENT_USER" }),
    onLogin() {
      this.$store.dispatch("users/SET_CURRENT_USER",  {user: this.user, status: true });
      console.log(this.currentUser)
        if (this.currentUser !== null) {
          this.$router.push("/");
        } else {
          this.message = "User not found. check login information";
        }
        
    }
  }
};
</script>

<style scoped>
</style>