<template>
    <service 
    :data="serviceDescriptions"
    service="website"
    text="WEBSITE"
    backgroundImage='/images/general_images/developpement-web-coding-background.jpg' 
    ></service>
</template>
<script>
import Service from '../service/Service.vue';
export default {
    metaInfo(){
        return {
            titleTemplate: '%s | ' + this.translate('META_TITLE_WEBSITE_PAGE'),
            meta: [{
                vmid: 'description',
                name: 'description',
                content: this.translate('META_DESCRIPTION_WEBSITE_PAGE'),
            }]
        }
    },
    data(){
        return {
            serviceDescriptions:[
                {
                    title:'TITLE_SERVICE_WEBSITE_FIRST_DESCRIPTION',
                    description:'TEXT_SERVICE_WEBSITE_FIRST_DESCRIPTION',
                    image:{
                        src:"/images/general_images/developpement-web-responsive.png",
                        alr:"",
                        direction:"left"
                    },
                    key:'website-service-first-description'
                },
                {
                    title:'TITLE_SERVICE_WEBSITE_SECOND_DESCRIPTION',
                    description:'TEXT_SERVICE_WEBSITE_SECOND_DESCRIPTION',
                    image:{
                        src:"/images/general_images/web-security.png",
                        alr:"ALT_SERVICE_WEBSITE_SECOND_DESCRIPTION",
                        direction:"right"
                    },
                    key:'website-service-second-description'
                },
                {
                    title:'TITLE_SERVICE_WEBSITE_THIRD_DESCRIPTION',
                    description:'TEXT_SERVICE_WEBSITE_THIRD_DESCRIPTION',
                    image:{
                        src:"/images/general_images/creation-site-web-innovant.png",
                        alr:"ALT_SERVICE_WEBSITE_THIRD_DESCRIPTION",
                        direction:"left"
                    },
                    key:'website-service-third-description'
                }
            ],
        }
    },
    components:{
        Service
    }
}
</script>