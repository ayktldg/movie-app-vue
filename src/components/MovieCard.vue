<template>
  <div class="movie-card card mr-4 mb-4 justify-content-between">
    <router-link :to="{name: 'MovieDetail', params: { id: movie.id}}" class="card-link">
      <MovieImage :movie="movie" />
      <div class="card-body">
        <div class="rank-container">
          <span class="rank">{{movie.vote_average}}</span>
        </div>
        <h6>{{movie.title}}</h6>
        <small>{{movie.release_date}}</small>
      </div>
    </router-link>
    <button
      v-if="$route.path ==='/watchlist'"
      @click="removeMovie"
      class="btn btn-sm text-white btn-block"
    >Remove</button>
  </div>
</template>

<script>
import MovieImage from "./MovieImage";
export default {
  name: "MovieCard",
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
    removeMovie() {
      this.$store.dispatch("users/REMOVE_FAVORITES", this.movie);
    }
  }
};
</script>

<style scoped>
.movie-card {
  width: 12.3rem;
  border-radius: 8px;
  border: none;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
}
.movie-card:hover {
  opacity: 0.9;
}
.card-link {
  color: black;
}
.card-body {
  position: relative;
}
.rank-container {
  background-color: rgb(13, 3, 61);
  border: 1px solid gray;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  text-align: center;
  position: absolute;
  top: -19px;
  right: 12px;
  padding: 3px;
}
.rank {
  color: white;
  font-weight: bold;
  font-size: 0.8em;
}
.btn {
  background-color: rgb(13, 3, 61);
  border-radius: 8px;
}
</style>