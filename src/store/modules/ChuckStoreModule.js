import { chuckService } from './../../services/ChuckService'

export const ChuckStore = {
    state: {
        randomJoke: null,
        jokeCategories: []
    },
    mutations: {
        setRandomJoke(state, rJoke) {
            state.randomJoke = rJoke
        },
        setJokeCategories(state, categories) {
            state.jokeCategories = categories
        }
    },
    actions: {
        getRandomJoke(context, category = '') {
            chuckService.getRandomJoke(category).then(rJoke => {
                context.commit('setRandomJoke', rJoke)
            })
        },
        getJokeCategories(context) {
            chuckService.getJokeCategories().then(cat => {
                context.commit('setJokeCategories', cat)
            })
        }
    },
    getters: {
        randomJoke(state) {
            return state.randomJoke
        },
        jokeCategories(state) {
            return state.jokeCategories
        }
    }
}