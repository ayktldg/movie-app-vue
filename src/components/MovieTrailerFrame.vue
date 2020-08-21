<template>
  <div class="trailer container d-flex flex-column">
    <div class="row">
      <!--   <button class @click="closeTrailer">close</button> -->
      <a @click="closeTrailer" class="close-btn text-white">
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          class="bi bi-x"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
          />
          <path
            fill-rule="evenodd"
            d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
          />
        </svg>
      </a>
    </div>

    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        class="embed-responsive-item"
        :src="`${API.TRAILER_URL}${movie.videos.results[0].key}`"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import API from "../api/index";
export default {
  name: "MovieTrailerFrame",
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      API
    };
  },
  methods: {
    closeTrailer() {
      this.$store.dispatch("movies/CHANGE_TRAILER_STATUS", false);
    }
  }
};
</script>

<style scoped>
.trailer {
  position: absolute;
  top: 2%;
  left: 7%;
  background-color: black;
}
.close-btn:hover{
     opacity: 0.9;
  cursor: pointer;
}
</style>