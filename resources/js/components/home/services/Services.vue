<template>
    <div class="services-container">
        <div class="row services-inner-container">
            <scroll-transition-manager 
                class="col-12 services-primary-title" 
                :class="{
                    'f-80 gabriola' : !isArabic,
                    'f-76 al-bayan' : isArabic
                }"
                scroll-animation-class="slide"
                direction="y"
                appear-animation-class="zoomIn"
                speed="slow"
                id="services-title" 
            >
                <div>
                    {{ 'TITLE_SERVICES' | translate }}
                </div>
            </scroll-transition-manager>
            <service 
                class="col-12" 
                :data="service" 
                v-for="(service,index) in services" 
                :key="service.key"
                :index = "index"
                :id="service.key+'-id'"
            ></service>
        </div>
        <transition 
            :enter-active-class="getAnimationDirectionByLangage('fast')" 
            :leave-active-class="getAnimationDirectionByLangage('slow',true)"
            appear
        >
            <div 
                class="services-navigator-container"
                :class="{
                    'left-0-right-auto' : !isArabic,
                    'right-0-left-auto' : isArabic
                }"
                v-if="showNavigatorAction"
            >
                <div class="services-navigator">
                    <div 
                        class="services-navigator-item" 
                        v-for="service in services" 
                        :key="service.key + '_slider'" 
                        @click="goToService(service.key)"
                        @mouseleave="closeNavigatorTicket(service.key)"
                    >
                        <div 
                            class="navigator-action" 
                            @mouseenter="openNavigatorTicket(service.key)" 
                        >
                            <div
                                class="navigator-action-form h-60 body-bg rounded-circle"
                                :id="service.key + '-action-form'"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import Service from './service/Service.vue';
export default {
    data(){
        return {
            services : [
                {
                    key:"website",
                    title : 'TITLE_WEBSITE',
                    text : 'TEXT_SERVICES_PRESENTATION_WEBSITE',
                    route : 'ROUTE_WEBSITE',
                    image : {
                        src : '/images/general_images/website2.png',
                        alt :'ALT_SERVICES_PRESENTATION_WEBSITE',
                        direction : 'left'
                    }
                },
                {
                    key:"e-commerce",
                    title : 'TITLE_E_COMMERCE',
                    text : 'TEXT_SERVICES_PRESENTATION_E_COMMERCE',
                    route : 'ROUTE_E_COMMERCE',
                    image : {
                        src : '/images/general_images/e_commerce.png',
                        alt :'ALT_SERVICES_PRESENTATION_E_COMMERCE',
                        direction : 'right'
                    }
                },
                {
                    key:"marketing-digital",
                    title : 'TITLE_MARKETING_DIGITAL',
                    text : 'TEXT_SERVICES_PRESENTATION_MARKETING_DIGITAL',
                    route : 'ROUTE_MARKETING_DIGITAL',
                    image : {
                        src : '/images/general_images/marketing_digital.png',
                        alt :'ALT_SERVICES_PRESENTATION_MARKETING_DIGITAL',
                        direction : 'left'
                    }
                },
                {
                    key:"seo",
                    title : 'TITLE_SEO',
                    text : 'TEXT_SERVICES_PRESENTATION_SEO',
                    route : 'ROUTE_SEO',
                    image : {
                        src : '/images/general_images/seo.png',
                        alt :'ALT_SERVICES_PRESENTATION_SEO',
                        direction : 'right'
                    }
                },
                {
                    key:"trainings",
                    title : 'TITLE_TRAININGS',
                    text : 'TEXT_SERVICES_PRESENTATION_TRAININGS',
                    route : 'ROUTE_TRAININGS',
                    image : {
                        src : '/images/general_images/idea_bulb.png',
                        alt :'ALT_SERVICES_PRESENTATION_TRAININGS',
                        direction : 'left'
                    }
                }
            ],
            lastActiveAction:null,
            showNavigatorAction : false
        }
    },
    computed:{
        direction(){
            return this.isArabic ? 'right' : 'left';
        },
    },
    watch:{
        showNavigatorAction(val){
            if(val){
                this.initializeServiceTicket();
                setTimeout(()=>{
                    this.determineActiveNavigatorAction();
                }, 500);
            }
        }
    },
    methods:{
        goToService(ref){
            this.scrollToViewById(ref + '-id');
            this.manageNavigatorAction(ref);
        },
        manageNavigatorAction(ref){
            this.makeActionInactive(this.lastActiveAction);
            this.makeActionActive(ref);
        },
        openNavigatorTicket(ref){
            this.addClassToActionForm(ref);
        },
        closeNavigatorTicket(ref){
            this.removeClassFromActionForm(ref);
        },
        makeActionActive(ref){
            this.lastActiveAction = ref;
            let element = document.getElementById(ref + '-action-form');
            this.removeAllClasses(element);
            this.addClasses(element,['h-10','rounded-lg','opacity-1','app-bg-danger']);
        },
        makeActionInactive(ref){
            if(ref){
                let element = document.getElementById(ref + '-action-form');
                this.removeAllClasses(element);
                this.addClasses(element,['h-60','rounded-circle','opacity-07','body-bg']);
            }
        },
        addClassToActionForm(ref){
            let element = document.getElementById(ref + '-action-form');
            this.removeAllClasses(element);
            this.addClasses(element,['h-10','rounded-lg','opacity-1','body-bg']);
        },
        removeClassFromActionForm(ref){
            if(this.lastActiveAction !== ref){
                let element = document.getElementById(ref + '-action-form');
                this.removeAllClasses(element);
                this.addClasses(element,['h-60','rounded-circle','opacity-07','body-bg']);
            }
        },
        addClasses(element,classes){
            element.classList.add('navigator-action-form');
            classes.forEach((className)=>{
                element.classList.add(className);
            });
        },
        removeAllClasses(element){
            element.className = '';
        },
        initializeServiceTicket(){
            for(let ref in this.$refs){
                this.hideTheServiceTicket(ref);
            }
        },
        determineActiveNavigatorAction(){
            if(this.showNavigatorAction){
                if((services.getBoundingClientRect().y - (window.innerHeight/2)) < 0){
                    let vm = this;
                    let firstElementInViewport = null;
                    let secondElementInViewport = null;
                    this.services.forEach((service)=>{
                        let element = document.getElementById(service.key + '-id');
                        if(inViewport(element)){
                            if(firstElementInViewport){
                                secondElementInViewport = {
                                    key:service.key,
                                    element
                                }
                            } else {
                                firstElementInViewport = {
                                    key:service.key,
                                    element
                                }
                            }
                        }
                    });
                    if(secondElementInViewport){
                        const firstElementY = firstElementInViewport.element.getBoundingClientRect().y + firstElementInViewport.element.offsetHeight;
                        const secondElementY = secondElementInViewport.element.offsetHeight - secondElementInViewport.element.getBoundingClientRect().y;
                        this.manageNavigatorAction((firstElementY - secondElementY) >=0 ? firstElementInViewport.key : secondElementInViewport.key);
                    } else if(firstElementInViewport){
                        this.manageNavigatorAction(firstElementInViewport.key);
                    }
                }
            }
        },
        initializeNavigatorAction(delay){
            setTimeout(()=>{
                this.showNavigatorAction = this.isInViewportById("services-presentation");
            },delay);
        },
        determineActiveNavigatiorActionWhenScrolling(){
            window.addEventListener('scroll',()=>{
                this.determineActiveNavigatorAction();
            });
        },
        managingNavigatorActionDisplay(){
            window.addEventListener('scroll',()=>{
                let element = document.getElementById("services-presentation");
                if(this.isInViewportByElement(element)){
                    if((element.getBoundingClientRect().y - (window.innerHeight/2)) < 0){
                        this.showNavigatorAction = this.isInViewportByElement(element);
                    }else{
                        this.showNavigatorAction=false; 
                    }
                }else{
                    this.showNavigatorAction=false;
                }
            });
        }
    },
    mounted(){
        this.initializeNavigatorAction(1000);
        this.determineActiveNavigatiorActionWhenScrolling();
        this.managingNavigatorActionDisplay();
    },
    components:{
        Service
    }
}
</script>
<style lang="scss" scoped>

@import '../../../../sass/app'; 

.services-container{
    @extend .app-text-white;
}
.services-inner-container{
    @extend .pb-4;
}
.services-primary-title{
    @extend .my-5, .text-center, .text-uppercase;
}
.services-navigator-container{
    position:fixed;
    top:0;
    @extend .h-100, .d-flex, .align-items-center;
}
.services-navigator{
    margin-left:10px;
    margin-right:10px;
    overflow: hidden
}
.services-navigator-item{
    position: relative;
    @extend .d-flex, .align-items-center;
}
.navigator-action{
    @extend .d-flex, .justify-content-start, .align-items-center;
    cursor:pointer;
    height:40px;
    width:40px;
    position:relative;
    z-index:1000;
}
.navigator-action-form{
    transition : all 500ms ease-out;
    @extend .w-60, .opacity-07;
}
.opacity-0{
    opacity:0;
}
.opacity-07{
    opacity:.7;
}
.opacity-1{
    opacity: 1;
}
.left-0-right-auto{
    left : 0;
    right : auto;
}
.rigth-0-left-auto{
    right : 0;
    left : auto;
}
</style>