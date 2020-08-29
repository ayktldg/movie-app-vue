<template>
  <div class="home">
    <div
      class="header"
      style="background-image: url('https://image.tmdb.org/t/p/original/gPcLCI8LmsOPCLPwwEoXj8lQ07R.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center;"
    >
      <div class="header-content container py-5 pr-5">
        <h1 class="header-title font-weight-bold text-white">Welcome.</h1>
        <h3
          class="header-description font-weight-bold mb-4 text-white"
        >Millions of movies, TV shows and people to discover. Explore now.</h3>
        <TheSearchBar />
      </div>
    </div>
    <div class="container my-4">
      <h2 class="title">Popular Films</h2>
    </div>
    <div class="movie-list container d-flex flex-wrap">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import TheSearchBar from "../components/TheSearchbar";
import MovieCard from "../components/MovieCard";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    TheSearchBar,
    MovieCard
  },
  computed: {
    ...mapGetters({ movies: "movies/movies" })
  },
  created() {
    this.$store.dispatch("movies/SET_MOVIE", "popular");
  }
};
</script>
<style scoped>
@media (max-width: 575.98px) {
  .header-content {
    padding-left: 3rem;
  }
  .header-title,
  .header-description {
    font-size: 1.1rem;
  }
  .movie-list {
    justify-content: center;
  }
  .title {
    text-align: center;
  }
}
</style>