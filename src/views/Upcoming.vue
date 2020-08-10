<template>
  <div class="upcoming">
    <p>upcoming</p>
  <div class="d-flex flex-wrap">
      <MovieCard
        v-for="(movie,index) in movies"
        :key="index"
        :poster_path="movie.poster_path"
        :title="movie.title"
        :release_date="movie.release_date"
        :vote_average="movie.vote_average"
      />
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
    ...mapState(["movies"])
  },
  created() {
    this.$store.dispatch("setMovie", "upcoming");
  }
};
</script>
<style scoped>
</style>