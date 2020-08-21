<template>
  <div class="searchbar">
    <input type="text" class="search form-control p-4" placeholder="Search movie" v-model="searchedMovie" />
  </div>
</template>

<script>
import debounce from "lodash/debounce";
export default {
  data() {
    return {
      searchedMovie: ""
    };
  },
  watch: {
    searchedMovie: debounce(function(newValue) {
      this.$store.dispatch("movies/SEARCH_MOVIE", newValue);
      this.$router.push({ name: "Search", params: { name: newValue } });
    }, 500)
  }
};
</script>

<style scoped>
.search{
  border-radius: 32px;
}
</style>