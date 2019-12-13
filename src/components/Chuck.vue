<template>
  <div class="container">
    <div v-if="randomJoke" class="list-group mt-5 mb-2">
      <p class="list-group-item">{{ randomJoke.value }}</p>
    </div>
    <button @click="getRandomJoke()" class="btn btn-success">
      <strong>Get New Joke</strong>
    </button>
    <div class="mt-3">
      <div class="form-group">
        <label for="sel1">Select joke category:</label>
        <select v-model="category" class="form-control" id="sel1">
          <option v-for="(joke, index) in jokeCategories" :key="index">{{
            joke
          }}</option>
        </select>
        <button class="btn btn-primary mt-4" @click="getWithCategory">
          <strong> Get Joke with Category</strong>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import store from "../store";

export default {
  data() {
    return {
      category: ""
    };
  },
  methods: {
    ...mapActions({
      getRandomJoke: "getRandomJoke"
    }),
    getWithCategory() {
      this.getRandomJoke(this.category);
    }
  },
  computed: {
    ...mapGetters({
      randomJoke: "randomJoke",
      jokeCategories: "jokeCategories"
    })
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([
      store.dispatch("getRandomJoke"),
      store.dispatch("getJokeCategories")
    ]).then(() => {
      next();
    });
  }
};
</script>
