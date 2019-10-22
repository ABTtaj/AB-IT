<template>
    <div class="row d-flex justify-content-center mb-5">
        <div class="col-md-12 text-center my-3">
            <app-title category="services"></app-title>
        </div>
        <div class="col-md-6 mt-5">
            <p class="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet quam quis lacus cursus, id lobortis est viverra. Morbi sollicitudin, nisl non placerat malesuada, orci est sagittis nulla, quis egestas enim sem quis ex.             
            </p>
        </div>
        <div class="col-md-12">
            <div class="py-3 service-upper-container">
                <div 
                    class="service-container bg-danger my-5 px-3" 
                    :class="{
                        'service-container':!isArabic,
                        'service-container-arabic':isArabic
                    }" 
                    id="website"
                >   
                    <div class="row h-100" v-if="widthGreater">
                        <div 
                            class="col-5 d-flex justify-content-center align-items-center"
                        >
                            <div class="text-center">
                            <img src="https://cdn.pixabay.com/photo/2017/12/13/16/01/brain-3017071_960_720.png" alt="Idea" class="img-fluid">
                            </div>
                        </div>
                        <div 
                            class="text-center text-white d-flex col-7 align-items-center"
                        >
                            <div class="row">
                                <div class="col-12 gabriola text-shadow">
                                    <div class="font-size-services-hor">Création de Site Web</div>
                                </div>
                                <div class="col-12 text-shadow font-size-services-quote-hor gabriola my-2">
                                    <div>Du site vitrine pour présenter votre activité, a l'idee qui revolutionnera le monde !</div>
                                </div>
                                <div class="col-12 d-flex justify-content-center my-2">
                                    <div class="custom-white-button-style font-size-services-button my-xl-3">Découvrez nos offres</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="align-items-center flex-column h-100 justify-content-around px-3 row text-center text-white" v-if="!widthGreater">
                        <div class="font-size-services-ver gabriola">Création de Site Web</div>
                        <img src="https://cdn.pixabay.com/photo/2017/12/13/16/01/brain-3017071_960_720.png" alt="Idea" class="img-fluid w-75 img-vertical">
                        <div class="my-2 text-shadow font-size-services-quote-ver gabriola">Du site vitrine pour présenter votre activité, a l'idee qui revolutionnera le monde !</div>
                        <div class="custom-white-button-style font-size-services-button">Découvrez nos offres</div>
                    </div>
                </div> 
            </div>
        </div>
        <div class="col-md-12">
            <div class="py-3 service-upper-container">
                <div 
                    class="service-container bg-danger d-flex justify-content-center align-items-center my-5" 
                    :class="{
                        'service-container':!isArabic,
                        'service-container-arabic':isArabic
                    }" 
                    id="eCommerce"
                >
                    <transition enter-active-class="animated zoomIn">
                        <div class="text-white f-30" v-if="services.eCommerce">Slide 1</div>
                    </transition>
                </div> 
            </div>
        </div>
        <div class="col-md-12">
            <div class="py-3 service-upper-container">
                <div 
                    class="service-container bg-danger d-flex justify-content-center align-items-center my-5" 
                    :class="{
                        'service-container':!isArabic,
                        'service-container-arabic':isArabic
                    }" 
                    id="marketingDigital"
                >

                </div> 
            </div>
        </div>
        <div class="col-md-12">
            <div class="py-3 service-upper-container">
                <div 
                    class="service-container bg-danger d-flex justify-content-center align-items-center my-5" 
                    :class="{
                        'service-container':!isArabic,
                        'service-container-arabic':isArabic
                    }" 
                    id="marketingAutomation"
                >
                    <transition enter-active-class="animated zoomIn">
                        <div class="text-white f-30" v-if="services.marketingAutomation">Slide 1</div>
                    </transition>
                </div> 
            </div>
        </div>
        <div class="col-md-12">
            <div class="py-3 service-upper-container">
                <div 
                    class="service-container bg-danger d-flex justify-content-center align-items-center my-5" 
                    :class="{
                        'service-container':!isArabic,
                        'service-container-arabic':isArabic
                    }" 
                    id="seo"
                >
                    <transition enter-active-class="animated zoomIn">
                        <div class="text-white f-30" v-if="services.seo">Slide 1</div>
                    </transition>
                </div> 
            </div>
        </div>
        <div class="col-md-12">
            <div class="py-3 service-upper-container">
                <div 
                    class="service-container bg-danger d-flex justify-content-center align-items-center my-5" 
                    :class="{
                        'service-container':!isArabic,
                        'service-container-arabic':isArabic
                    }" 
                    id="trainings"
                >
                </div> 
            </div>
        </div>
        <transition
            enter-active-class="animated fadeIn" 
            leave-active-class="animated fadeOut" 
            appear
        >
            <div class="slide-buttons-container d-flex flex-column justify-content-center align-items-center" v-if="showSlideButtons">
                <div 
                    v-for="(value,index) in servicesSlideButtons" 
                    :key="index" 
                    :class="{
                    'slide-button-active':value,
                    'slide-button':device=='pc',
                    'slide-button-mobile':device=='mobile'
                    }" @click="buttonSlideAction(index)"></div>
            </div>
        </transition>
    </div>
</template>

<script>
import AppTitle from '../helpers/Title.vue';
import inViewport from 'in-viewport';
import scrollIntoView from 'scroll-into-view';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
export default{
    data(){
        return {
            services:{
                website:false,
                eCommerce:false,
                marketingDigital:false,
                marketingAutomation:false,
                seo:false,
                trainings:false
            },
            servicesSlideButtons:{
                website:false,
                eCommerce:false,
                marketingDigital:false,
                marketingAutomation:false,
                seo:false,
                trainings:false
            },
            ids:[
                'website',
                'eCommerce',
                'marketingDigital',
                'marketingAutomation',
                'seo',
                'trainings'
            ],
            currentIndex:-1,
            haveScrolled:false,
            lastScrollY:0,
            isScrolling:false,
            widthGreater:null
        }
    },
    computed:{
        showSlideButtons(){
            for(let key in this.servicesSlideButtons){
                if(this.servicesSlideButtons[key]){
                    return true;
                }
            }
            return false;
        }
    },
    methods:{
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
            this.isScrolling=true;
            disableBodyScroll(document.body,{
                reserveScrollBarGap: true
            });
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
            this.services[this.ids[this.currentIndex]] = true;
            for (let key in this.servicesSlideButtons) {
                if(key == this.ids[this.currentIndex]){
                    this.servicesSlideButtons[key] = true;
                } else {
                    this.servicesSlideButtons[key] = false;
                }
            }
        }
        
    },
    components:{
        AppTitle
    },
    mounted(){
        this.widthGreater = window.innerWidth > window.innerHeight ? true : false;
        window.addEventListener('resize',()=>{
            this.widthGreater = window.innerWidth > window.innerHeight ? true : false;
        });
        window.addEventListener('scroll',()=>{
            if(!this.isScrolling){
                if(this.isScrollingBottom()){
                    this.currentIndex++;
                    if(this.ids[this.currentIndex]){
                        this.goIntoView(this.ids[this.currentIndex]);
                    } else {
                        this.goIntoView('footer');
                    }
                } else if(this.isScrollingTop()){
                    this.currentIndex--;
                    if(this.ids[this.currentIndex]){
                        this.goIntoView(this.ids[this.currentIndex]);
                    } else {
                        this.goIntoView('header');
                    }
                }
            }
            this.manageSlideButtons();
            this.updateLastScrollY();
        })
    }
}
</script>

<style scoped>
.service-upper-container{
    height:100vh;
}
.service-container{
    height: 100%;
    margin-left: calc(-50vw + 50%);
    width: 100vw;
    box-shadow: inset 0 25px 25px -20px rgba(0,0,0,0.8), inset 0 -25px 30px -25px rgba(0,0,0,0.8);
}
.service-container-arabic{
    height: 100%;
    margin-right: calc(-50vw + 50%);
    width: 100vw;
    box-shadow: inset 0 25px 25px -20px rgba(0,0,0,0.8), inset 0 -25px 30px -25px rgba(0,0,0,0.8);
}
.slide-buttons-container{
    height:100%;
    position: fixed;
    top:0px;
    left: 10px;
}
.slide-button{
    background-color: #343a40;
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
.slide-button-mobile{
    background-color: #343a40;
    cursor:pointer;
    border-radius: 50%;
    transition:all 500ms;
    opacity:0.7;
    width: 20px;
    height: 20px;
    margin:5px 0;
}
.img-vertical{
    margin-top : -5%;
}
</style>