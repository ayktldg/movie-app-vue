<template>
  <div class="is-showing">
    <p>Now Playing</p>
    <div class="d-flex flex-wrap">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers('movies')
export default {
  name: "NowPlaying",
  components: {
    MovieCard
  },
  computed: {
    ...mapGetters({ movies: "movies" })
  },
  created() {
    this.$store.dispatch("movies/SET_MOVIE", "now_playing");
  }
};
</script>

<style scoped>
</style>