<template>
    <service 
    :data="serviceDescriptions"
    service="e-commerce"
    text="E_COMMERCE"
    backgroundImage='/images/general_images/e-commerce-background.jpg' 
    ></service>
</template>
<script>
import Service from '../service/Service.vue';
export default {
    metaInfo(){
        return {
            titleTemplate: '%s | ' + this.translate('META_TITLE_E_COMMERCE_PAGE'),
            meta: [{
                vmid: 'description',
                name: 'description',
                content: this.translate('META_DESCRIPTION_E_COMMERCE_PAGE'),
            }]
        }
    },
    data(){
        return {
            serviceDescriptions:[
                {
                    title:'TITLE_SERVICE_E_COMMERCE_FIRST_DESCRIPTION',
                    description:'TEXT_SERVICE_E_COMMERCE_FIRST_DESCRIPTION',
                    image:{
                        src:"/images/general_images/developpement-web-responsive.png",
                        alr:"",
                        direction:"left"
                    },
                    key:'e-commerce-service-first-description'
                },
                {
                    title:'TITLE_SERVICE_E_COMMERCE_SECOND_DESCRIPTION',
                    description:'TEXT_SERVICE_E_COMMERCE_SECOND_DESCRIPTION',
                    image:{
                        src:"/images/general_images/web-security.png",
                        alr:"ALT_SERVICE_E_COMMERCE_SECOND_DESCRIPTION",
                        direction:"right"
                    },
                    key:'e-commerce-service-second-description'
                },
                {
                    title:'TITLE_SERVICE_E_COMMERCE_THIRD_DESCRIPTION',
                    description:'TEXT_SERVICE_E_COMMERCE_THIRD_DESCRIPTION',
                    image:{
                        src:"/images/general_images/creation-site-web-dynamique-statistique-analyse.png",
                        alr:"ALT_SERVICE_E_COMMERCE_THIRD_DESCRIPTION",
                        direction:"left"
                    },
                    key:'e-commerce-service-third-description'
                }
            ],
        }
    },
    components:{
        Service
    }
}
</script>