<template>
    <service 
    :data="serviceDescriptions"
    service="marketing-digital"
    text="MARKETING_DIGITAL"
    backgroundImage='/images/general_images/marketing-digital-background.jpg' 
    ></service>
</template>
<script>
import Service from '../service/Service.vue';
export default {
    metaInfo(){
        return {
            titleTemplate: '%s | ' + this.translate('META_TITLE_MARKETING_DIGITAL_PAGE'),
            meta: [{
                vmid: 'description',
                name: 'description',
                content: this.translate('META_DESCRIPTION_MARKETING_DIGITAL_PAGE'),
            }]
        }
    },
    data(){
        return {
            serviceDescriptions:[
                {
                    title:'TITLE_SERVICE_MARKETING_DIGITAL_FIRST_DESCRIPTION',
                    description:'TEXT_SERVICE_MARKETING_DIGITAL_FIRST_DESCRIPTION',
                    image:{
                        src:"/images/general_images/e-reputation.png",
                        alr:"",
                        direction:"left"
                    },
                    key:'marketing-digital-service-first-description'
                },
                {
                    title:'TITLE_SERVICE_MARKETING_DIGITAL_SECOND_DESCRIPTION',
                    description:'TEXT_SERVICE_MARKETING_DIGITAL_SECOND_DESCRIPTION',
                    image:{
                        src:"/images/general_images/communaute-reseaux-sociaux-creation-site-web.png",
                        alr:"ALT_SERVICE_MARKETING_DIGITAL_SECOND_DESCRIPTION",
                        direction:"right"
                    },
                    key:'marketing-digital-service-second-description'
                },
                {
                    title:'TITLE_SERVICE_MARKETING_DIGITAL_THIRD_DESCRIPTION',
                    description:'TEXT_SERVICE_MARKETING_DIGITAL_THIRD_DESCRIPTION',
                    image:{
                        src:"/images/general_images/marketing-digital-publishing.png",
                        alr:"ALT_SERVICE_MARKETING_DIGITAL_THIRD_DESCRIPTION",
                        direction:"left"
                    },
                    key:'marketing-digital-service-third-description'
                }
            ],
        }
    },
    components:{
        Service
    }
}
</script>