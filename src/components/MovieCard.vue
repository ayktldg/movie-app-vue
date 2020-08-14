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
      <a @click="goToDetail" class="btn btn-primary">Detail</a>
    </div>
  </div>
</template>

<script>
import noImage from "../assets/noImage.jpg";
import { mapState } from "vuex";
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      noImage
    };
  },
  computed: {
    ...mapState({ baseImageUrl: "baseImageUrl" })
  },
  methods: {
    goToDetail() {
      this.$store.dispatch("setMovieDetail", this.movie.id);
      this.$router.push({ name: "MovieDetail", params: { id: this.movie.id } });
    }
  }
};
</script>

<style scoped>
</style>