<template>
  <div class="home">
    <h1>Popular Films</h1>
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
  name: "Home",
  components: {
    MovieCard
  },
  computed: {
    ...mapState(["movies"])
  },
  created() {
    this.$store.dispatch("setMovie", "popular");
  }
};
</script>
<style scoped>
</style>
