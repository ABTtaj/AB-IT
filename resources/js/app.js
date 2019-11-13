import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAnimateOnScroll from 'vue-animate-onscroll';
import App from './App.vue';
import { router } from './router/router.js';
import {store} from './store/store';
import translation from './translation/translation';
import { mapGetters, mapActions } from 'vuex';
import widthSizes from './helpers/widthSizes';
import ScrollTransitionManager from './components/helpers/ScrollTransitionManager.vue';
import inViewport from 'in-viewport';
import VueMeta from 'vue-meta';

window.Vue = Vue;

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})
Vue.use(VueRouter);
Vue.use(VueAnimateOnScroll);

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
            return this.selectedLangage === 'ar' ? true : false;
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
            const langage = store.getters.selectedLangage;
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
        },
        getAnimationDirectionByLangageInverce( speed , out = false ){
            if(out){
                if(this.isArabic){
                    return 'animated slideOutLeft ' + (speed ? speed : '') ;
                } else {
                    return 'animated slideOutRight ' + (speed ? speed : '') ;
                }
            } else {
                if(this.isArabic){
                    return 'animated slideInLeft ' + (speed ? speed : '') ;
                } else {
                    return 'animated slideInRight ' + (speed ? speed : '') ;
                }
            }
        }
    },
    created() {
        this.initializeWindowSize();
    },
    mounted(){
        this.manageImagesPositionWithWidthResizing();
    }
});

Vue.filter('translate',(value) => {
    const langage = store.getters.selectedLangage;
    return translation[langage][value];
})

Vue.component('ScrollTransitionManager',ScrollTransitionManager);

const app = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});

