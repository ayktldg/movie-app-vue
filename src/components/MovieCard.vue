<template>
  <div class="card m-2" style="width: 16rem;">
    <img
      :src="movie.poster_path ? `${baseImageUrl}${movie.poster_path}`: noImage"
      class="card-img-top"
      :alt="`${movie.title}`"
    />
    <div class="card-body">
      <h5 class="card-title">{{movie.title}}</h5>
      <p class="card-text">{{movie.release_date}}</p>
      <p>Imdb Rank: {{movie.vote_average}}</p>
      <router-link to="/movie-detail" class="btn btn-primary">Detail</router-link>
    </div>
  </div>
</template>

<script>
import noImage from "../assets/noImage.jpg";
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      baseImageUrl: "https://image.tmdb.org/t/p/w500/",
      noImage
    };
  }
};
</script>

<style scoped>
</style>