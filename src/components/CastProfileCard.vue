<template>
  <div class="cast-card card mr-4 mb-4">
    <img
      :src="`${API.IMAGE_URL}${actor.profile_path}`"
      class="card-img-top"
      :alt="`${actor.title}`"
    />
    <div class="card-body">
      <h5 class="card-title">{{actor.name}}</h5>
      <p class="card-text">Character: {{actor.character}}</p>
    </div>
  </div>
</template>

<script>
import API from "../api/index";
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
      API
    };
  }
};
</script>

<style scoped>
.cast-card {
  width: 12.3rem;
  border-radius: 8px;
  border: none;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
}
</style>