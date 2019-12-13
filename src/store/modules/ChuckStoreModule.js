import { chuckService } from './../../services/ChuckService'

export const ChuckStore = {
    state: {
        randomJoke: null
    },
    mutations: {
        setRandomJoke(state, rJoke) {
            state.randomJoke = rJoke
        }
    },
    actions: {
        getRandomJoke(context) {
            chuckService.getRandomJoke().then(rJoke => {
                context.commit('setRandomJoke', rJoke)
            })
        }
    },
    getters: {
        randomJoke(state) {
            return state.randomJoke
        }
    }
}