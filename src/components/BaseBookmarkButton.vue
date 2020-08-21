<template>
  <div>
    <a class="fav" @click="addFavorites" :disabled="!isLogin">
      <svg
        width="1.5em"
        height="1.5em"
        viewBox="0 0 16 16"
        class="bi bi-bookmark-fill"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" d="M3 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12l-5-3-5 3V3z" />
      </svg>
      {{bookmarkStatus ? 'remove': 'add'}}
    </a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BaseBookmarkButton",
 /*  props: {
    movie: {
      type: Object,
      required: true
    }
  }, */
  data() {
    return {
      selectedMovie: {}
    };
  },
  methods: {
    addFavorites() {
      if (this.bookmarkStatus) {
        this.$store.dispatch("users/REMOVE_FAVORITES", this.selectedMovie);
      } else {
        this.$store.dispatch("users/ADD_FAVORITES", this.selectedMovie);
      }
    }
  },
  computed: {
    ...mapGetters({
      favorites: "users/favorites",
      isLogin: "users/isLogin",
      movie: "movies/movieDetail"
    }),
    bookmarkStatus() {
      const movie = this.favorites.filter(obj => obj.id === this.selectedMovie.id);
      if (movie.length > 0) {
        return movie;
      }else{
        return null;
      }  
    }
  },
  created() {
    this.selectedMovie = this.movie;
  }
};
</script>

<style scoped>
.fav:hover {
  opacity: 0.9;
  cursor: pointer;
}
</style>