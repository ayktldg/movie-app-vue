<template>
  <div class="home">
    <h1>Popular Films</h1>
    <div class="d-flex flex-wrap">
      <MovieCard v-for="(item,index) in 10" :key="index" />
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard";
export default {
  name: "Home",
  components: {
    MovieCard
  }
};
</script>
<style scoped>
</style>
