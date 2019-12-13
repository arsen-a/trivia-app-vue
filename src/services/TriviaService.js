import axios from 'axios'

class TriviaService {
    constructor() {
        axios.defaults.baseURL = 'http://jservice.io/api/'
        this.axios = axios
    }

    getRandomTrivia() {
        return this.axios.get('random', { params: { count: 30 } })
    }
}

export const triviaService = new TriviaService()