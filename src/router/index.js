import Vue from 'vue'
import VueRouter from 'vue-router'
import { authGuard } from '../auth/authGuard';

import Home from '../views/Home.vue'
import Profile from '../views/Perfil.vue';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: import.meta.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            beforeEnter: authGuard
        },

        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            beforeEnter: authGuard
        }
    ]
})

export default router
