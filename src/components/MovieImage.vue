<template>
  <div class="cast-card">
    <img
      :src="movie.poster_path ? `${API.IMAGE_URL}${movie.poster_path}`: noImage"
      class="movie-image"
      :alt="`${movie.title}`"
    />
  </div>
</template>

<script>
import noImage from "../assets/noImage.jpg";
import API from "../api/index";
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      noImage,
      API
    };
  }
};
</script>

<style scoped>
.movie-image{
  width: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

}
</style>