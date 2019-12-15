<template>
  <div class="container">
    <div class="mt-3">
      <label for="sel1"><strong>Select trivia category</strong></label>
      <select v-model="category" class="form-control" id="sel1">
        <option
          v-for="(category, index) in categories"
          :key="index"
          :value="category.id"
          >{{ category.title }}</option
        >
      </select>
      <button
        @click="getTriviaWithCategory(category)"
        class="btn btn-success mt-2"
      >
        <strong>Get with category</strong>
      </button>
      <span class="m-3 p-0">or</span>
      <button @click="getRandomTrivia()" class="btn btn-primary mt-2">
        <strong>Get random</strong>
      </button>
    </div>
    <p class="hint mt-4">
      <i>* Click on a single question reveals the asnwer</i>
    </p>
    <ul class="list-group mt-3">
      <li
        class="list-group-item"
        v-for="trivia in randomTrivia"
        :key="trivia.id"
        :id="trivia.id"
      >
        <div>
          <a type="submit" @click.prevent="revealAnswer(trivia)">
            {{ trivia.question }}
          </a>
        </div>
        <div>
          <p v-if="trivia.answerRevealed" class="answer mt-2 mb-2">
            * {{ trivia.answer }} *
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      category: undefined
    };
  },
  methods: {
    ...mapActions({
      getRandomTrivia: "getRandomTrivia",
      getTriviaCategories: "getTriviaCategories",
      getTriviaWithCategory: "getTriviaWithCategory"
    }),
    revealAnswer(trivia) {
      trivia.answerRevealed === false
        ? (trivia.answerRevealed = true)
        : (trivia.answerRevealed = false);
    }
  },
  computed: {
    ...mapGetters({
      randomTrivia: "randomTrivia",
      categories: "categories"
    })
  },
  created() {
    this.getRandomTrivia();
    this.getTriviaCategories();
  }
};
</script>

<style scoped>
.list-group-item {
  text-align: center;
}

.answer {
  color: red;
}

.hint {
  color: grey;
}
</style>
