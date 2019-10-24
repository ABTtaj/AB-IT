<template>
    <div class="row d-flex justify-content-center mb-5">
        <div class="col-12 text-center my-3" id="service-title">
            <app-title category="services"></app-title>
        </div>
        <div class="col-md-6">
            <p class="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet quam quis lacus cursus, id lobortis est viverra. Morbi sollicitudin, nisl non placerat malesuada, orci est sagittis nulla, quis egestas enim sem quis ex.             
            </p>
        </div>
        <div class="col-12" v-for="service in services" :key="service.id">
            <service :data="service"></service>
        </div>
        <transition
            enter-active-class="animated fadeIn" 
            leave-active-class="animated fadeOut" 
            appear
        >
            <div 
                class="slide-buttons-container d-flex flex-column justify-content-center align-items-center"
                :class="{
                    'slide-buttons-container-opacity': !isScrolling
                }" 
                v-if="showSlideButtons"
            >
                <div 
                    v-for="(value,index) in servicesSlideButtons" 
                    :key="index" 
                    :class="{
                        'slide-button-active':value,
                        'slide-button bg-dark':device=='pc',
                        'slide-button-mobile bg-dark':device=='mobile'
                    }" 
                    @click="buttonSlideAction(index)"></div>
            </div>
        </transition>
    </div>
</template>

<script>
import Service from './Service/Service.vue';
import AppTitle from '../helpers/Title.vue';
import inViewport from 'in-viewport';
import scrollIntoView from 'scroll-into-view';
import { mapGetters } from 'vuex';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
export default{
    data(){
        return {
            services:[
                {   
                    id:"website",
                    title:"MENU_WEBSITE",
                    quote:"SERVICES_WEBSITE_QUOTE",
                    action:"BUTTON_DISCOVER_SERVICES_OFFERS",
                    route:"ROUTE_WEBSITE",
                    image:{
                        url:"../../../images/general_images/website.png",
                        alt:"ALT_SERVICES_WEBSITE"
                    },
                    show:false
                },
                {
                    id:"e-commerce",
                    title:"MENU_E_COMMERCE",
                    quote:"SERVICES_E_COMMERCE_QUOTE",
                    action:"BUTTON_DISCOVER_SERVICES_OFFERS",
                    route:"ROUTE_E_COMMERCE",
                    image:{
                        url:"../../../images/general_images/e_commerce.png",
                        alt:"ALT_SERVICES_E_COMMERCE"
                    },
                    show:false
                },
                {
                    id:"marketing-digital",
                    title:"MENU_MARKETING_DIGITAL",
                    quote:"SERVICES_MARKETING_DIGITAL_QUOTE",
                    action:"BUTTON_DISCOVER_SERVICES_OFFERS",
                    route:"ROUTE_MARKETING_DIGITAL",
                    image:{
                        url:"../../../images/general_images/marketing_digital.png",
                        alt:"ALT_SERVICES_MARKETING_DIGITAL"
                    },
                    show:false
                },
                {
                    id:"seo",
                    title:"MENU_SEO",
                    quote:"SERVICES_SEO_QUOTE",
                    action:"BUTTON_DISCOVER_SERVICES_OFFERS",
                    route:"ROUTE_SEO",
                    image:{
                        url:"../../../images/general_images/seo.png",
                        alt:"ALT_SERVICES_SEO"
                    },
                    show:false
                },
                {
                    id:"trainings",
                    title:"MENU_TRAININGS",
                    quote:"SERVICES_TRAININGS_QUOTE",
                    action:"BUTTON_DISCOVER_SERVICES_OFFERS",
                    route:"ROUTE_TRAININGS",
                    image:{
                        url:"https://cdn.pixabay.com/photo/2017/12/13/16/01/brain-3017071_960_720.png",
                        alt:"ALT_SERVICES_TRAININGS"
                    },
                    show:false
                }
            ],
            servicesSlideButtons:{
                website:false,
                'e-commerce':false,
                'marketing-digital':false,
                seo:false,
                trainings:false
            },
            ids:[
                'website',
                'e-commerce',
                'marketing-digital',
                'seo',
                'trainings'
            ],
            currentIndex:-1,
            haveScrolled:false,
            lastScrollY:0,
            isScrolling:false,
            shownBar:true,
            whereToScroll:'header',
            slideInViewPort:null
        }
    },
    computed:{
        ...mapGetters([
            'collapseMenuOpen'
        ]),
        showSlideButtons(){
            for(let key in this.servicesSlideButtons){
                if(this.servicesSlideButtons[key]){
                    return true;
                }
            }
            return false;
        }
    },
    watch:{
        collapseMenuOpen(val){
            if(!val){
                this.haveScrolled=false;
                this.manageScrollParams(10);
            }
        }
    },
    methods:{
        isSlideInViewport(){
            let result = false;
            this.ids.forEach((id)=>{
                if(this.isInViewport(id)){
                    this.slideInViewPort = id;
                    result = true;
                }
            });
            return result;
        },
        isInViewport(id){
            const element = document.getElementById(id);
            return inViewport(element);
        },
        buttonSlideAction(index){
            this.currentIndex = this.ids.indexOf(index);
            this.manageSlideButtons();
            this.goIntoView(index);
        },
        goIntoView(id){
            const element = document.getElementById(id);
            this.disableScolling();
            scrollIntoView(element,{cancellable:false},this.endOfScrolling);
        },
        isScrollingBottom(){
            return this.lastScrollY < window.scrollY;
        },
        isScrollingTop(){
            return this.lastScrollY > window.scrollY;
        },
        updateLastScrollY(){
            this.lastScrollY = window.scrollY;
        },
        endOfScrolling(type){
            if(type === "complete"){
                this.isScrolling = false;
                enableBodyScroll(document.body);
            }
        },
        manageSlideButtons(){
            if(this.services[this.currentIndex]){
                this.services[this.currentIndex].show = true;
            }
            for (let key in this.servicesSlideButtons) {
                if(key == this.ids[this.currentIndex]){
                    this.servicesSlideButtons[key] = true;
                } else {
                    this.servicesSlideButtons[key] = false;
                }
            }
        },
        disableScolling(){
            this.isScrolling=true;
            disableBodyScroll(document.body,{
                reserveScrollBarGap: true
            });
        },
        divToDivScroll(){
            if(!this.isScrolling){
                if(this.isScrollingBottom()){
                    this.currentIndex++;
                    if(!this.ids[this.currentIndex]){
                        this.currentIndex--;
                    } 
                    this.goIntoView(this.ids[this.currentIndex]);
                } else if(this.isScrollingTop()){
                    this.currentIndex--;
                    if(this.ids[this.currentIndex]){
                        this.goIntoView(this.ids[this.currentIndex]);
                    } else {
                        this.goIntoView(this.whereToScroll);
                    }
                }
            }
        },
        manageScrollParams(delay){
            setTimeout(()=>{
                if(window.scrollY){
                    if(!this.isSlideInViewport()){
                        this.whereToScroll = "service-title";
                    }else if(! this.haveScrolled){
                        this.currentIndex = this.ids.indexOf(this.slideInViewPort);
                        this.goIntoView(this.slideInViewPort);
                        this.manageSlideButtons();
                    }
                    this.haveScrolled=true;
                } else {
                    if(!this.isSlideInViewport()){
                        this.whereToScroll = "service-title";
                    }
                    this.haveScrolled=true;
                }
            },delay);
        }
    },
    components:{
        AppTitle,
        Service
    },
    mounted(){
        this.manageScrollParams(1000);
        window.addEventListener('scroll',()=>{
            this.manageScrollParams(1000);
            if(this.isSlideInViewport() && !this.collapseMenuOpen){
                this.divToDivScroll();
            }
            this.manageSlideButtons();
            this.updateLastScrollY();
        },{
            passive: true
        });
    }
}
</script>

<style scoped>
.slide-buttons-container{
    height:100%;
    position: fixed;
    top:0px;
    left: 10px;
}
.slide-button{
    cursor:pointer;
    border-radius: 50%;
    transition:all 500ms;
    opacity:0.7;
    width: 20px;
    height: 20px;
    margin:5px 0;
}
.slide-button-active{
    transition:all 500ms;
    opacity:1 !important;
    width: 30px !important;
    height: 30px !important;
}
.slide-button:hover{
    transition:all 500ms;
    opacity:1;
    width:30px;
    height:30px;
}
.slide-buttons-container-opacity{
    transition:all 500ms;
    opacity:0.4;
}
.slide-buttons-container-opacity:hover{
    transition:all 500ms;
    opacity:1;
}
.slide-button-mobile{
    cursor:pointer;
    border-radius: 50%;
    transition:all 500ms;
    opacity:0.7;
    width: 20px;
    height: 20px;
    margin:5px 0;
}
</style>