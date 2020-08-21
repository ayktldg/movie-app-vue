<template>
  <div class="upcoming">
    <div class="container my-4">
      <h2 class>Upcoming</h2>
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
