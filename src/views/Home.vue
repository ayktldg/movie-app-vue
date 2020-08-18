<template>
  <div class="home">
    <h1>Popular Films</h1>
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
  name: "Home",
  components: {
    MovieCard
  },
  computed: {
    ...mapGetters({ movies: "movies"} )
  },
  created() {
    this.$store.dispatch("movies/SET_MOVIE", 'popular');
  }
};
</script>
<style scoped>
</style>
