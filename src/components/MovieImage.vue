<template>
  <div>
    <img
      :src="movie.poster_path ? `${API.IMAGE_URL}${movie.poster_path}`: noImage"
      class="card-img-top"
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
</style>