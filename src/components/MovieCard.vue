<template>
  <div class="card m-2" style="width: 16rem;">
    <img
      :src="`https://image.tmdb.org/t/p/w500/${poster_path}`"
      class="card-img-top"
      :alt="`${title}`"
    />
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{release_date}}</p>
      <p>Imdb Rank: {{vote_average}}</p>
      <router-link to="/movie-detail" class="btn btn-primary">Detail</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    poster_path: {
      type: String || null,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    release_date: {
      type: String,
      required: true
    },
    vote_average: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
</style>