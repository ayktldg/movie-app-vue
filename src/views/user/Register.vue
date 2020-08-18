<template>
  <div class="container mt-3">
    <form @submit.prevent="onRegister">
      <h1 class="h3 mb-3 font-weight-normal">Register</h1>
      <div>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          type="email"
          v-model="user.email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
        />
      </div>
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
        <span class="pr-2">Register</span>
        <!--  <div class="spinner-border text-light" role="status" v-if="loading">
          <span class="sr-only">Loading...</span>
        </div>-->
      </button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  name: "Register",
  data() {
    return {
      user: {
        id: "",
        userName: "",
        email: "",
        password: ""
      }
    };
  },
  methods:{
    onRegister(){
      this.generateId();
      this.$store.dispatch('users/ADD_USER', this.user).then(() => {
        this.$router.push('/login')
      })
    },
    generateId(){
      this.user.id = uuidv4();
    }
  }
};
</script>

<style scoped>
</style>