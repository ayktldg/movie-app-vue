<template>
  <div class="home">
    <h1>Popular Films</h1>
    <div class="d-flex flex-wrap">
      <MovieCard v-for="(movie,index) in movies" :key="index" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    MovieCard
  },
  computed: {
    ...mapState({ movies: "movies" })
  },
  created() {
    this.$store.dispatch("setMovie", "popular");
  }
};
</script>
<style scoped>
</style>
