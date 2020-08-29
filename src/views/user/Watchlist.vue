<template>
  <div class="watchlist">
    <div class="container my-4">
      <h2 class="title">My Watchlist</h2>
    </div>
    <div v-show="favorites.length == 0" class="container my-5">
      <p class="message">Your</p>
      <p class="message">favorite movies</p>
      <p class="message">will come to this list.</p>
    </div>
    <div class="movie-list container my-5 d-flex flex-wrap">
      <MovieCard v-for="movie in favorites" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from "../../components/MovieCard";
import { mapGetters } from "vuex";
export default {
  name: "WatchList",
  components: {
    MovieCard
  },
  computed: {
    ...mapGetters({ favorites: "users/favorites" })
  }
};
</script>
<style scoped>
.message {
  font-size: 5em;
  font-weight: bold;
}
@media (max-width: 575.98px) {
  .movie-list {
    justify-content: center;
  }
  .title {
    text-align: center;
  }
}
</style>