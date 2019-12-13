import Vue from 'vue'
import Vuex from 'vuex'
import { ChuckStore } from './modules/ChuckStoreModule'
import { TriviaStore } from './modules/TriviaStoreModule'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        ChuckStore,
        TriviaStore
    }
})

export default store