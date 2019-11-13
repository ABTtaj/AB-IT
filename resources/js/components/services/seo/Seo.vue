<template>
    <service 
    :data="serviceDescriptions"
    service="seo"
    text="SEO"
    backgroundImage='/images/general_images/seo-background.jpg' 
    ></service>
</template>
<script>
import Service from '../service/Service.vue';
export default {
    metaInfo(){
        return {
            titleTemplate: '%s | ' + this.translate('META_TITLE_SEO_PAGE'),
            meta: [{
                vmid: 'description',
                name: 'description',
                content: this.translate('META_DESCRIPTION_SEO_PAGE'),
            }]
        }
    },
    data(){
        return {
            serviceDescriptions:[
                {
                    title:'TITLE_SERVICE_SEO_FIRST_DESCRIPTION',
                    description:'TEXT_SERVICE_SEO_FIRST_DESCRIPTION',
                    image:{
                        src:"/images/general_images/seo-audit-developpement-web.png",
                        alr:"",
                        direction:"left"
                    },
                    key:'seo-service-first-description'
                },
                {
                    title:'TITLE_SERVICE_SEO_SECOND_DESCRIPTION',
                    description:'TEXT_SERVICE_SEO_SECOND_DESCRIPTION',
                    image:{
                        src:"/images/general_images/seo.png",
                        alr:"ALT_SERVICE_SEO_SECOND_DESCRIPTION",
                        direction:"right"
                    },
                    key:'seo-service-second-description'
                }
            ],
        }
    },
    components:{
        Service
    }
}
</script>