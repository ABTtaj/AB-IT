import App from './App.vue';
import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { routes } from './routes.js';

window.Vue = Vue;

Vue.use(VueRouter);


const router = new VueRouter({
    mode:'history',
    routes
})

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
