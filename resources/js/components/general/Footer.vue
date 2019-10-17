<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <hr>
        </div>
        <div class="col-md-4 d-flex justify-content-around">
            <social-media-icon v-for="socialMedia in socialMedias" :type="socialMedia"></social-media-icon>
        </div>
    </div>
</template>

<script>
import SocialMediaIcon from '../social-icons/SocialMediaIcon.vue';

export default{
    components:{
        SocialMediaIcon,
    },
    data(){
        return {
            socialMedias:[
                'facebook',
                'instagram',
                'linkedIn',
                'twitter',
                'youtube'
            ]
        }
    }
}
</script>

<style scoped>

</style>
