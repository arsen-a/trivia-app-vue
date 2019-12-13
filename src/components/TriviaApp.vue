<template>
  <div class="container">
    <ul class="list-group mt-5">
      <li class="list-group-item" v-for="trivia in randomTrivia" :key="trivia.id">
          {{ trivia.question }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions({
      getRandomTrivia: 'getRandomTrivia'
    })
  },
  computed: {
    ...mapGetters({
      randomTrivia: 'randomTrivia'
    })
  },
  created() {
    this.getRandomTrivia()
  }
};
</script>

<style scoped>
  .list-group-item {
    text-align: center;
  }
</style>