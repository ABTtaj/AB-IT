<template>
    <div class="row service-container">
        <div class="col-12 service-inner-container">
            <div class="row"
                :style="{
                    'background-image' : 'url(' + backgroundImage + ')',
                    'background-size' : 'cover',
                    'background-position' : 'center'
                }"
            >
                <div 
                    class="col-12 service-title-container"
                    id="service-title-container"
                >
                    <scroll-transition-manager 
                        class="service-title"
                        scroll-animation-class="slide"
                        direction="y"
                        appear-animation-class="zoomIn"
                        speed="slow"
                    >
                        <h1
                            :class="{
                                'f-80 gabriola' : !isArabic,
                                'f-76 al-bayan' : isArabic
                            }"
                        >
                            {{ 'TITLE_' + text | translate }}
                        </h1>
                    </scroll-transition-manager>
                    <scroll-transition-manager 
                        class="service-sub-title"
                        :class="{
                            'f-24 gabriola' : !isArabic,
                            'f-22 al-bayan' : isArabic
                        }"
                        scroll-animation-class="slide"
                        direction="y"
                        appear-animation-class="zoomIn"
                        speed="slow"
                    >
                        <div>
                        {{ 'TEXT_SERVICE_' + text | translate }}
                        </div>
                    </scroll-transition-manager>
                </div>
            </div>
            <div class="row service-descriptions-container">
                <service-description
                    v-for="serviceDescription in data"
                    :key="serviceDescription.key"
                    :data="serviceDescription"
                ></service-description>
            </div>
            <div    
                class="row service-contact-us-container"
                id="service-contact-us"
            >
                <scroll-transition-manager 
                    class="service-contact-us-title"
                    scroll-animation-class="slide"
                    direction="y"
                    appear-animation-class="zoomIn"
                    speed="slow"
                >
                    <h2
                        :class="{
                            'f-60 gabriola' : !isArabic,
                            'f-56 al-bayan' : isArabic
                        }"
                    >
                        {{'TITLE_HOME_PAGE_CONTACT' | translate}}
                    </h2>
                </scroll-transition-manager>
                <scroll-transition-manager 
                    class="service-contact-us-text"
                    :class="{
                        'f-24 gabriola' : !isArabic,
                        'f-22 al-bayan' : isArabic
                    }"
                    scroll-animation-class="slide"
                    direction="y"
                    appear-animation-class="zoomIn"
                    speed="slow"
                >
                    <div>
                        {{ 'TEXT_SERVICE_CONTACT_US_TEXT' |translate}}
                    </div>
                </scroll-transition-manager>
                <scroll-transition-manager 
                    class="service-contact-us-action"
                    :class="{
                        'f-24 gabriola' : !isArabic,
                        'f-22 al-bayan' : isArabic
                    }"
                    scroll-animation-class="slide"
                    direction="y"
                    appear-animation-class="zoomIn"
                    speed="slow"
                >
                    <router-link 
                        class="service-contact-us-button"
                        :to="{ name : translate('ROUTE_CONTACT')}"
                        tag="div"
                    >
                        <div>
                            {{ 'TITLE_HOME_PAGE_CONTACT' | translate }}
                        </div>
                    </router-link>
                </scroll-transition-manager>
            </div>
        </div>
    </div>
</template>
<script>
import ServiceDescription from '../service-description/ServiceDescription.vue';
export default {
    props:[
        'backgroundImage',
        'data',
        'service',
        'text'
    ],
    methods:{
        initializeTheHeaderColor(){
            const serviceUpperBlock = document.getElementById('service-title-container');
            const contactUs = document.getElementById('service-contact-us');
            const header = document.getElementById('upper-header-container');
            if(window.scrollY <= serviceUpperBlock.offsetHeight || (contactUs.getBoundingClientRect().top - header.offsetHeight) < 0){
                this.switchDarkMode(true);
            } else {
                this.switchDarkMode(false);
            }
        },
        updateTheHeaderWhenScrolling(){
            if(this.$route.name === this.service + "-" + this.selectedLangage ){
                this.initializeTheHeaderColor();
            }
        },
        manageDarkModeOfTheHeader(delay){
            setTimeout(()=>{
                this.initializeTheHeaderColor();
                window.addEventListener('scroll',this.updateTheHeaderWhenScrolling);
            },delay);
        }
    },
    mounted(){
        this.manageDarkModeOfTheHeader(800);
    },
    components:{
        ServiceDescription
    }
}
</script>
<style lang="scss" scoped>

@import '../../../../sass/app';

.service-container{
    @extend .app-bg-black, .pb-5;
}
.service-title-container{
    @extend .app-text-white, .d-flex, .flex-column, .align-content-center, .justify-content-center, .shadow-xxl, .py-5, .px-3, .px-md-5;
    background-color:rgba(0,0,0,.9);
    min-height:100vh;
}
.service-title{
    @extend .text-center, .mb-3, .mb-md-5, .text-uppercase, .text-break;
}
.service-sub-title{
    @extend .text-center;
}
.service-descriptions-container{
    @extend .body-bg, .inset-y-shadow-xxl, .py-5;
}
.service-contact-us-container{
    @extend .flex-column, .app-text-white, .text-center, .justify-content-center, .align-items-center, .px-4;
}
.service-contact-us-title{
    @extend .mt-5, .text-uppercase;
}
.service-contact-us-text{
    @extend .my-5;
}
.service-contact-us-action{
    @extend .border-white-2, .w-95, .d-flex, .justify-content-center, .align-items-center, .mt-4, .mb-md-4, .mb-5;
    cursor:pointer;
    transition : all 500ms ease-out;
    height:57px;
    &:hover{
        @extend .app-bg-danger, .w-100;
    }
}
.service-contact-us-button{
        @extend .w-100, .h-100, .d-flex, .align-items-center, .justify-content-center;
}
</style>