import Vue from 'vue'
import Router from 'vue-router'
import TriviaApp from '../components/TriviaApp.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: TriviaApp,
        name: 'home'
    }
]

const router = new Router({
    mode: 'history',
    routes
})

export default router