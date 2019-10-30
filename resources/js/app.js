import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueAnimateOnScroll from 'vue-animate-onscroll';
import App from './App.vue';
import { routes } from './routes/routes.js';
import storeData from './store/store';
import translation from './translation/translation';
import { mapGetters, mapActions } from 'vuex';
import widthSizes from './helpers/widthSizes';
import ScrollTransitionManager from './components/helpers/ScrollTransitionManager.vue';
import inViewport from 'in-viewport';

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(VueAnimateOnScroll);
Vue.use(Vuex);

// Mixins 

Vue.mixin({
    data(){
        return {
            windowSize : null,
            isLessThanMd : null     
        }
    },
    computed:{
        ...mapGetters([
            'selectedLangage',
            'paddingTop',
            'darkMode'
        ]),
        isArabic(){
            return this.selectedLangage === 'ma' ? true : false;
        }
    },
    methods:{
        ...mapActions([
            'configureFlash',
            'switchDarkMode'
        ]),
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
        },
        widthIsOrMoreThan(widthSize){
            return window.innerWidth >= widthSizes[widthSize];
        },
        widthLessThan(widthSize){
            return window.innerWidth < widthSizes[widthSize];
        },
        onlyFor(widthSize){
            return widthSize === this.getSize();
        },
        exceptFor(widthSize){
            return !(widthSize === this.getSize());
        },  
        getSize(){
            const windowWidth = window.innerWidth;
            if(windowWidth < widthSizes.sm){
                return 'xs';
            } else if(windowWidth >= widthSizes.sm && windowWidth < widthSizes.md ){
                return 'sm';
            } else if(windowWidth >= widthSizes.md && windowWidth < widthSizes.lg ){
                return 'md';
            } else if(windowWidth >= widthSizes.lg && windowWidth < widthSizes.xl ){
                return 'lg';
            } else {
                return 'xl'
            }
        },
        isInViewportById(id){
            let element = document.getElementById(id);
            return inViewport(element);
        },
        isInViewportByElement(element){
            return inViewport(element);
        },
        scrollToViewById(id){
            let element = document.getElementById(id);
            element.scrollIntoView({
                behavior: "smooth"
            });
        },
        initializeWindowSize(){
            this.windowSize = this.getSize();
        },
        determineIsLessThanMd(){
            this.isLessThanMd = this.widthLessThan('md');
        },
        determineIsLessThanMdWhenResizing(){
            window.addEventListener('resize',()=>{
                this.determineIsLessThanMd();
            });
        },
        manageImagesPositionWithWidthResizing(){
            this.determineIsLessThanMd();
            this.determineIsLessThanMdWhenResizing();
        },
        makeHeaderWhite(){
            if(this.$route.name !== 'home' && this.$route.name !== ("contact-" + this.selectedLangage)){
                this.switchDarkMode(false);
            }
        },
        getAnimationDirection(direction){
            if(direction === 'left'){
                if(this.isArabic){
                    return 'slideInRight';
                } else {
                    return 'slideInLeft';
                }
            } else {
                if(this.isArabic){
                    return 'slideInLeft';
                } else {
                    return 'slideInRight';
                }
            }
        },
        getAnimationDirectionByLangage( speed , out = false ){
            if(out){
                if(this.isArabic){
                    return 'animated slideOutRight ' + (speed ? speed : '') ;
                } else {
                    return 'animated slideOutLeft ' + (speed ? speed : '') ;
                }
            } else {
                if(this.isArabic){
                    return 'animated slideInRight ' + (speed ? speed : '') ;
                } else {
                    return 'animated slideInLeft ' + (speed ? speed : '') ;
                }
            }
        }
    },
    created() {
        this.initializeWindowSize();
    },
    mounted(){
        this.makeHeaderWhite();
        this.manageImagesPositionWithWidthResizing();
    }
});

Vue.filter('translate',(value) => {
    const langage = storeData.state.langage;
    return translation[langage][value];
})

Vue.component('ScrollTransitionManager',ScrollTransitionManager);

const store = new Vuex.Store(storeData);

const router = new VueRouter({
    mode:'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

const app = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
window.app = app;
