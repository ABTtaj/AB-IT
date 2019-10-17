import './bootstrap';
import Vue from 'vue';
import App from './App.vue';

window.Vue = Vue;

const app = new Vue({
    el: '#app',
    render: h => h(App)
});
