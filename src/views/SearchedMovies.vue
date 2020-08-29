<template>
  <div class="search">
    <div class="container my-4 pr-5">
      <div class="mt-5 mb-4">
        <TheSearchBar />
      </div>
      <h2 class="title">Search Results</h2>
    </div>
    <div class="movie-list container d-flex flex-wrap">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard";
import { mapGetters } from "vuex";
import TheSearchBar from "../components/TheSearchbar";
export default {
  name: "SearchedMovies",
  components: {
    MovieCard,
    TheSearchBar
  },
  computed: {
    ...mapGetters({ movies: "movies/movies" })
  }
};
</script>

<style scoped>
@media (max-width: 575.98px) {
  .movie-list {
    justify-content: center;
  }
  .title {
    text-align: center;
  }
}
</style>
