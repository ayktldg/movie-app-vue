<template>
  <div class="home">
    <div
      class="header"
      style="background-image: url('https://image.tmdb.org/t/p/original/gPcLCI8LmsOPCLPwwEoXj8lQ07R.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center;"
    >
      <div class="container py-5">
        <h1 class="font-weight-bold text-white">Welcome.</h1>
        <h3
          class="font-weight-bold mb-4 text-white"
        >Millions of movies, TV shows and people to discover. Explore now.</h3>
        <TheSearchBar />
      </div>
    </div>
    <div class="container my-4">
      <h2>Popular Films</h2>
    </div>
    <div class="container d-flex flex-wrap">
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
