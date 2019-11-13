import { routes } from '../routes/routes.js';
import VueRouter from 'vue-router';

export const router = new VueRouter({
    mode:'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})