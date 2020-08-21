<template>
  <div class="detail">
    <div
      class="main text-white"
      :style="`background-image: url(${API.IMAGE_URL}${movieDetail.backdrop_path});
     background-repeat: no-repeat; 
     background-size: cover; 
     background-position: center center;`"
    >
      <div class="main-content p-5">
        <div class="row m-3">
          <div class="col-3">
            <MovieImage :movie="movieDetail" />
          </div>
          <div class="col-9">
            <h2 class="font-weight-bold">{{movieDetail.title}}</h2>
            <ul class="d-flex mt-3">
              <li class="mr-5">
                <small>{{movieDetail.release_date}}</small>
              </li>
              <li class="mr-5">
                <small class="card-text" v-for=" (genre,index) in movieDetail.genres" :key="index">
                  {{genre.name}}
                  <span></span>
                </small>
              </li>
              <li>
                <small>{{movieDetail.runtime}} min</small>
              </li>
            </ul>
            <div class="selection d-flex align-items-center mt-5">
              <div class="rank-container d-flex align-items-center">
                <div class="d-flex align-items-center">
                  <span class="rank">{{movieDetail.vote_average}}</span>
                </div>
                <div class="ml-4">
                  <small class="font-weight-bold">IMDB Rank</small>
                </div>
              </div>
              <div class="buttons ml-5 d-flex align-items-center">
                <a class="play ml-4 text-white" @click="showTrailer">
                  <svg class="icon icon-play3">
                    <use xlink:href="#icon-play3" />
                  </svg>
                  <symbol id="icon-play3" viewBox="0 0 32 32">
                    <path d="M6 4l20 12-20 12z"></path>
                  </symbol>Play trailer
                </a>
                <BaseBookmarkButton :movie="movieDetail" class="ml-4" v-if="isLogin" />
              </div>
            </div>
            <h5 class="font-weight-light font-italic mt-4">{{movieDetail.tagline}}</h5>
            <h5 class="font-weight-bold mt-4">Overview</h5>
            <p class="card-text">{{movieDetail.overview}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container cast mt-5">
      <h2>Cast</h2>
      <div class="d-flex flex-wrap mt-3">
        <CastProfileCard v-for="actor in cast" :key="actor.id" :actor="actor" />
      </div>
    </div>
    <MovieTrailerFrame :movie="movieDetail" v-if="trailerIsShowing" />
  </div>
</template>

<script>
import MovieImage from "../components/MovieImage";
import CastProfileCard from "../components/CastProfileCard";
import API from "../api/index";
import BaseBookmarkButton from "../components/BaseBookmarkButton";
import MovieTrailerFrame from "../components/MovieTrailerFrame";
import { mapGetters } from "vuex";
export default {
  name: "MovieDetail",
  components: {
    MovieImage,
    CastProfileCard,
    BaseBookmarkButton,
    MovieTrailerFrame
  },
  data() {
    return {
      API
    };
  },
  methods: {
    showTrailer() {
      this.$store.dispatch("movies/CHANGE_TRAILER_STATUS", true);
    }
  },
  computed: {
    ...mapGetters({
      movieDetail: "movies/movieDetail",
      cast: "movies/cast",
      trailerIsShowing: "movies/trailerIsShowing",
      isLogin: "users/isLogin"
    })
  },
  created() {
    this.$store.dispatch("movies/SET_MOVIE_DETAIL", this.$route.params.id);
    this.$store.dispatch("movies/SET_MOVIE_CAST", this.$route.params.id);
  }
};
</script>
<style scoped>
.main-content {
  background-color: rgb(0, 51, 85);
  opacity: 0.9;
}
.rank-container {
  background-color: rgb(13, 3, 61);
  border: 2px solid rgb(241, 234, 131);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  text-align: center;
  padding-left: 10px;
}
.play:hover {
  opacity: 0.9;
  cursor: pointer;
}
.icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
</style>
