import App from './App.vue';
import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { routes } from './routes.js';
import storeData from './store/store'

window.Vue = Vue;

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(storeData);

const router = new VueRouter({
    mode:'history',
    routes
})

const app = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
