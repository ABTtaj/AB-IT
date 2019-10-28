<template>
    <div class="services-container">
        <div class="row services-inner-container">
            <div 
                class="col-12 services-primary-title" 
                :class="{
                    'f-80 gabriola' : !isArabic,
                    'f-76 al-bayan' : isArabic
                }"
            >
                {{ 'TITLE_SERVICES' | translate }}
            </div>
            <service 
                class="col-12" 
                :data="service" 
                v-for="(service,index) in services" 
                :key="service.key"
                :index = "index"
            ></service>
        </div>
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
                        src : '/images/general_images/website2.png',
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
                        src : '/images/general_images/website2.png',
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
                        src : '/images/general_images/website2.png',
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
                        src : '/images/general_images/website2.png',
                        alt :'ALT_SERVICES_PRESENTATION_TRAININGS',
                        direction : 'left'
                    }
                }
            ]
        }
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
    @extend .my-5, .text-center;
}
</style>