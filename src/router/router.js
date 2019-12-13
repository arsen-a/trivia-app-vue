import Vue from 'vue'
import Router from 'vue-router'
import TriviaApp from '../components/TriviaApp.vue'
import Chuck from '../components/Chuck.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: TriviaApp,
        name: 'home'
    },
    {
        path: '/chuck',
        component: Chuck,
        name: 'chuck'
    }
]

const router = new Router({
    mode: 'history',
    routes
})

export default router