<template>
  <div>
    <input type="text" class="form-control w-50" placeholder="Search movie" v-model="searchedMovie" />
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
      this.$store.dispatch("searchMovie", newValue);
      this.$router.push({ name: "Search", params: { name: newValue } });
    }, 500)
  }
};
</script>

<style scoped>
</style>