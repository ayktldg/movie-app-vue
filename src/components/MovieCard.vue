<template>
  <div class="card m-2" style="width: 16rem;">
    <MovieImage :movie="movie"/>
    <div class="card-body">
      <h5 class="card-title">{{movie.title}}</h5>
      <p class="card-text">{{movie.release_date}}</p>
      <p>Imdb Rank: {{movie.vote_average}}</p>
      <a @click="goToDetail" class="btn btn-primary">Detail</a>
    </div>
  </div>
</template>

<script>
import MovieImage from "./MovieImage";
export default {
  name: 'MovieCard',
  components: {
    MovieImage
  },
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToDetail() {
      this.$store.dispatch("setMovieDetail", this.movie.id);
      this.$router.push({ name: "MovieDetail", params: { id: this.movie.id } });
    }
  },
};
</script>

<style scoped>
</style>