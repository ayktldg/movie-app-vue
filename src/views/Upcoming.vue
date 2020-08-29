<template>
  <div class="upcoming">
    <div class="container my-4">
      <h2 class="title">Upcoming</h2>
    </div>
    <div class="movie-list container d-flex flex-wrap">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard";
import { mapGetters } from "vuex";
export default {
  name: "Upcoming",
  components: {
    MovieCard
  },
  computed: {
    ...mapGetters({ movies: "movies/movies" })
  },
  created() {
    this.$store.dispatch("movies/SET_MOVIE", "upcoming");
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

