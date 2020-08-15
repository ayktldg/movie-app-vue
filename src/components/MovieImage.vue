<template>
  <div>
    <img
      :src="movie.poster_path ? `${mediaUrls.imageBaseUrl}${movie.poster_path}`: noImage"
      class="card-img-top"
      :alt="`${movie.title}`"
    />
  </div>
</template>

<script>
import noImage from "../assets/noImage.jpg";
import mediaUrls from "../utils/mediaUrls";
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
      mediaUrls
    };
  }
};
</script>

<style scoped>
</style>