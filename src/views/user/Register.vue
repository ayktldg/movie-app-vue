<template>
  <div
    class="container d-flex align-items-center justify-content-center register-container"
  >
    <div class="my-5">
      <h2 class="mb-5 text-center">Sign up for millions of movies.</h2>
      <form @submit.prevent="onRegister">
        <div class="form-group">
          <label for="inputEmail">Email address</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            placeholder="Enter email"
            v-model="user.email"
          />
        </div>
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
        <button type="submit" class="btn font-weight-bold text-white btn-block">
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "Register",
  data() {
    return {
      user: {
        id: "",
        userName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onRegister() {
      this.generateId();
      this.$store.dispatch("users/ADD_USER", this.user).then(() => {
        this.$router.push("/login");
      });
    },
    generateId() {
      this.user.id = uuidv4();
    },
  },
};
</script>
<style scoped>
.register-container {
  height: calc(100vh - 11.65rem);
}
.btn {
  background-color: rgb(11, 4, 44);
}
@media (max-width: 575.98px) {
  .register-container {
    height: auto;
  }
}
</style>
