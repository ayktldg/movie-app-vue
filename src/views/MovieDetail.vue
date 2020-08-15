<template>
  <div>
    <div class="main">
      <img
        class="bg w-100"
        style="max-height: 600px"
        :src="`${mediaUrls.imageBaseUrl}${movieDetail.backdrop_path}`"
        :alt="`${movieDetail.title}`"
      />
      <div class="detail-card bg-dark p-3 text-white d-flex m-3">
        <MovieImage :movie="movieDetail" />
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
          <button @click="showTrailer = !showTrailer">Play trailer</button>
        </div>
      </div>
    </div>
    <div class="container bg-primary d-flex overflow-auto my-3" v-if="showTrailer">
      <iframe
        class="mx-2"
        width="800"
        height="640"
        :src="`${mediaUrls.trailerBaseUrl}${movieDetail.videos.results[0].key}`"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MovieImage from "../components/MovieImage";
import mediaUrls from "../utils/mediaUrls";
export default {
  name: "MovieDetail",
  components: {
    MovieImage
  },
  data() {
    return {
      mediaUrls,
      showTrailer: false
    };
  },
  computed: {
    ...mapState({ movieDetail: "movieDetail" })
  },
  created() {
    this.$store.dispatch("setMovieDetail", this.$route.params.id);
    console.log(this.movieDetail.videos.results[0].key);
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