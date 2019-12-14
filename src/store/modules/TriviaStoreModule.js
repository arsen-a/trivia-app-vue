import { triviaService } from './../../services/TriviaService' 

export const TriviaStore = {
    state: {
        randomTrivia: null
    },
    mutations: {
        setRandomTrivia(state, trivia) {
            state.randomTrivia = trivia
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
        }
    },
    getters: {
        randomTrivia(state) {
            return state.randomTrivia
        }
    }
}