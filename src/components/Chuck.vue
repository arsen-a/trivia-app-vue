<template>
  <div class="container">
    <div v-if="randomJoke" class="list-group mt-5 mb-2">
        <p class="list-group-item">{{ randomJoke.value }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import store from '../store'

export default {
  methods: {
    ...mapActions({
      getRandomJoke: "getRandomJoke"
    })
  },
  computed: {
    ...mapGetters({
      randomJoke: "randomJoke"
    })
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('getRandomJoke').then(() => {
        next()
    })
  }
};
</script>
