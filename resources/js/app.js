import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';
import { routes } from './routes.js';
import storeData from './store/store';
import translation from './translation/translation';
import { mapGetters, mapActions } from 'vuex';


window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(Vuex);

// Mixins 

Vue.mixin({
    data(){
        return {
            device:null,      
        }
    },
    computed:{
        ...mapGetters([
            'selectedLangage'
        ]),
        isArabic(){
            return this.selectedLangage === 'ma' ? true : false;
        }
    },
    methods:{
        ...mapActions(['configureFlash']),
        flash(message,type,where,translation = true){
            this.configureFlash({
                message: translation ? this.translate(message) : message,
                type,
                where
            });
        },
        translate(param){
            const langage = storeData.state.langage;
            return translation[langage][param];
        }
    },
    created() {
        window.addEventListener('resize',()=>{
            this.device = window.innerWidth < 992 ? 'mobile' : 'pc';
        })
        this.device = window.innerWidth < 992 ? 'mobile' : 'pc';
    }
});

Vue.filter('translate',(value) => {
    const langage = storeData.state.langage;
    return translation[langage][value];
})

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
window.app = app;
