<template>
  <div class="main">
    <img
      class="bg w-100"
      style="max-height: 600px"
      :src="`${baseImageUrl}${movieDetail.backdrop_path}`"
      :alt="`${movieDetail.title}`"
    />
    <div class="detail-card bg-dark p-3 text-white d-flex m-3">
      <img
        class="card-image w-25"
        :src="`${baseImageUrl}${movieDetail.poster_path}`"
        :alt="`${movieDetail.title}`"
      />
      <div class="card-description ml-4 mt-5">
        <h1 class="card-title">{{movieDetail.title}}</h1>
        <h2>{{movieDetail.tagline}}</h2>
        <h6>Overview</h6>
        <p class="card-text">{{movieDetail.overview}}</p>
        <p class="card-text">Release Date: {{movieDetail.release_date}}</p>
        <p class="card-text">Runtime: {{movieDetail.runtime}}</p>
        <p class="card-text">Budged: {{movieDetail.budget}}$</p>
        <h6>Genres</h6>
        <span
          class="card-text"
          v-for=" (genre,index) in movieDetail.genres"
          :key="index"
        >{{genre.name}}</span>
        <p>Rank: {{movieDetail.vote_average}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MovieDetail",
  computed: {
    ...mapState(["baseImageUrl", "movieDetail"])
  }
};
</script>

<style scoped>
.main {
  position: relative;
}
.detail-card {
  position: absolute;
  top: 8px;
  left: 16px;
  max-width: 1300px;
  opacity: 0.8;
}
.card-image {
  opacity: 1;
}
</style>