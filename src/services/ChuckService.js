const Chuck  = require('chucknorris-io')


class ChuckService {
    constructor() {
        this.client = new Chuck();
    }

    getRandomJoke(category = '') {
        const params = category ? [category] : []
        return this.client.getRandomJoke(...params)
    }

    getJokeCategories() {
        return this.client.getJokeCategories()
    }
}

export const chuckService = new ChuckService()