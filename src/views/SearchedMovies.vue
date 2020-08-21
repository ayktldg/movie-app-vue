<template>
  <div class="search">
    <div class="container my-4">
      <h2 class>Search Results</h2>
    </div>
    <div class="container d-flex flex-wrap">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard";
import { mapGetters } from "vuex";
export default {
  name: "SearchedMovies",
  components: {
    MovieCard
  },
  computed: {
    ...mapGetters({ movies: "movies/movies" })
  }
};
</script>
