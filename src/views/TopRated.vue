<template>
  <div class="top-rated">
    <div class="container my-4">
      <h2 class>Top Rated</h2>
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
  name: "TopRated",
  components: {
    MovieCard
  },
  computed: {
    ...mapGetters({ movies: "movies/movies" })
  },
  created() {
    this.$store.dispatch("movies/SET_MOVIE", "top_rated");
  }
};
</script>
