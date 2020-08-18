<template>
  <div>
    <h1>Searched Movies</h1>
    <div class="d-flex flex-wrap">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("movies");
export default {
  name: "SearchedMovies",
  components: {
    MovieCard
  },
  computed: {
    ...mapGetters({ movies: "movies" })
  }
};
</script>

<style scoped>
</style>