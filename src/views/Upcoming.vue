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
import { mapState } from "vuex";
export default {
  name: "Upcoming",
  components: {
    MovieCard
  },
  computed: {
    ...mapState({ movies: "movies" })
  },
  created() {
    this.$store.dispatch("setMovie", "upcoming");
  }
};
</script>
<style scoped>
</style>