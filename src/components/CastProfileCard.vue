<template>
  <div class="card m-2" style="width: 8rem;">
    <img :src="actor.profile_path ? `${API.IMAGE_URL}${actor.profile_path}`: noImage" class="card-img-top" :alt="`${actor.title}`" />
    
    <h5 class="card-title">{{actor.name}}</h5>
    <p class="card-text">Character: {{actor.character}}</p>
  </div>
</template>

<script>
import API from "../api/index";
import noImage from "../assets/noImage.jpg";
export default {
  name: "CastProfileCard",
  props: {
    actor: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      API,
      noImage
    };
  }
};
</script>

<style scoped>
</style>