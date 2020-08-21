<template>
  <div id="app">
    <TheNavbar />
    <div class="body mx-auto">
        <router-view />
    </div>
    <TheFooter />
  </div>
</template>
<script>
import TheNavbar from "./components/TheNavbar";
import TheFooter from "./components/TheFooter";
export default {
  name: "App",
  components: {
    TheNavbar,
    TheFooter
  }
};
</script>
<style>
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}
#app a {
  text-decoration: none;
}
#app img {
  width: 100%;
}
</style>
