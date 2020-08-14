<template>
  <div id="app">
    <TheNavbar />
    <TheSearchBar />
    <router-view />
  </div>
</template>
<script>
import TheNavbar from "./components/TheNavbar";
import TheSearchBar from "./components/TheSearchbar";
export default {
  name: "App",
  components: {
    TheNavbar,
    TheSearchBar
  },
   created() {
    this.$store.dispatch("setMovie");
  }
};
</script>

<style>
</style>
