<template>
  <div class="card m-2" style="width: 16rem;">
    <MovieImage :movie="movie"/>
    <div class="card-body">
      <h5 class="card-title">{{movie.title}}</h5>
      <p class="card-text">{{movie.release_date}}</p>
      <p>Imdb Rank: {{movie.vote_average}}</p>
      <router-link :to="{name: 'MovieDetail', params: { id: movie.id}}" class="btn btn-primary">Detail</router-link>
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
  }
};
</script>

<style scoped>
</style>