const Chuck  = require('chucknorris-io')


class ChuckService {
    constructor() {
        this.client = new Chuck();
    }

    getRandomJoke() {
        return this.client.getRandomJoke()
    }
}

export const chuckService = new ChuckService()