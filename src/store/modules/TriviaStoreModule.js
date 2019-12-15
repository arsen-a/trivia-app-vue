import { triviaService } from './../../services/TriviaService'

export const TriviaStore = {
    state: {
        randomTrivia: null,
        categories: null
    },
    mutations: {
        setRandomTrivia(state, trivia) {
            state.randomTrivia = trivia
        },
        setTriviaCategories(state, categories) {
            state.categories = categories
        }
    },
    actions: {
        getRandomTrivia(context) {
            triviaService.getRandomTrivia().then(tr => {
                tr.data.forEach(trivia => {
                    trivia.answerRevealed = false
                })
                context.commit('setRandomTrivia', tr.data)
            })
        },
        getTriviaCategories(context) {
            triviaService.getTriviaCategories().then(tr => {
                context.commit('setTriviaCategories', tr.data)
            })
        },
        getTriviaWithCategory(context, category) {
            triviaService.getTriviaWithCategory(category).then(tr => {
                console.log(tr) //eslint-disable-line
                tr.data.clues.forEach(trivia => {
                    trivia.answerRevealed = false
                })
                context.commit('setRandomTrivia', tr.data.clues)
            })
        }
    },
    getters: {
        randomTrivia(state) {
            return state.randomTrivia
        },
        categories(state) {
            return state.categories
        }
    }
}