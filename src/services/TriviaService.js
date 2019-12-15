import axios from 'axios'

class TriviaService {
    constructor() {
        axios.defaults.baseURL = 'http://jservice.io/api/'
        this.axios = axios
    }

    getRandomTrivia() {
        return this.axios.get('random', { params: { count: 30 } })
    }

    getTriviaCategories() {
        return this.axios.get('categories', { params: { count: 10 } })
    }

    getTriviaWithCategory(category) {
        return this.axios.get('category', { params: { id: category } })
    }
}

export const triviaService = new TriviaService()