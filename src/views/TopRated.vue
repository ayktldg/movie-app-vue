<template>
  <div class="top-rated">
    <h1>Top rated</h1>
    <div class="d-flex flex-wrap">
      <MovieCard v-for="(movie,index) in movies" :key="index" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard";
import { mapState } from "vuex";
export default {
  name: "TopRated",
  components: {
    MovieCard
  },
  computed: {
    ...mapState({ movies: "movies" })
  },
  created() {
    this.$store.dispatch("setMovie", "top_rated");
  }
};
</script>

<style scoped>
</style>
