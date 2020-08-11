<template>
  <div class="is-showing">
    <p>is showing</p>
    <div class="d-flex flex-wrap">
      <MovieCard v-for="(movie,index) in movies" :key="index" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard";
import { mapState } from "vuex";
export default {
  name: "IsShowing",
  components: {
    MovieCard
  },
  computed: {
    ...mapState({ movies: "movies" })
  },
  created() {
    this.$store.dispatch("setMovie", "now_playing");
  }
};
</script>

<style scoped>
</style>