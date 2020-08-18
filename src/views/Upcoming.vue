<template>
  <div class="upcoming">
    <p>upcoming</p>
    <div class="d-flex flex-wrap">
      <MovieCard v-for="(movie,index) in movies" :key="index" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers('movies')
export default {
  name: "Upcoming",
  components: {
    MovieCard
  },
  computed: {
    ...mapGetters({ movies: "movies" })
  },
  created() {
    this.$store.dispatch("movies/SET_MOVIE", "upcoming");
  }
};
</script>
<style scoped>
</style>