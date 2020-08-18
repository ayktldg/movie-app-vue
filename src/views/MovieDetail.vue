<template>
  <div>
    <div class="main">
      <img
        class="bg w-100"
        style="max-height: 600px"
        :src="`${API.IMAGE_URL}${movieDetail.backdrop_path}`"
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
    <div class="container cast d-flex flex-wrap">
      <CastProfileCard v-for="actor in cast" :key="actor.id" :actor="actor" />
    </div>
    <div class="container bg-primary d-flex overflow-auto my-3" v-if="showTrailer">
      <iframe
        class="mx-2"
        width="800"
        height="640"
        :src="`${API.TRAILER_URL}${movieDetail.videos.results[0].key}`"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import MovieImage from "../components/MovieImage";
import CastProfileCard from "../components/CastProfileCard";
import API from "../api/index";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("movies");
export default {
  name: "MovieDetail",
  components: {
    MovieImage,
    CastProfileCard
  },
  data() {
    return {
      API,
      showTrailer: false
    };
  },
  computed: {
    ...mapGetters({ movieDetail: "movieDetail", cast: "cast" })
  },
  created() {
    this.$store.dispatch("movies/SET_MOVIE_DETAIL", this.$route.params.id);
    this.$store.dispatch("movies/SET_MOVIE_CAST", this.$route.params.id);
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