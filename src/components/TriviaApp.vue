<template>
  <div class="container">
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
  methods: {
    ...mapActions({
      getRandomTrivia: "getRandomTrivia"
    }),
    revealAnswer(trivia) {
      trivia.answerRevealed = true
    }
  },
  computed: {
    ...mapGetters({
      randomTrivia: "randomTrivia"
    })
  },
  created() {
    this.getRandomTrivia();
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
