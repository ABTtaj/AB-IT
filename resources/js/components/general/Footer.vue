<template>
    <div class="container mb-4" id="footer">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <hr class="divider">
            </div>
            <div class="col-md-4 d-flex justify-content-around">
                <social-media-icon v-for="socialMedia in socialMedias" :key="socialMedia" :type="socialMedia"></social-media-icon>
            </div>
        </div>
    </div>
</template>

<script>
import SocialMediaIcon from '../helpers/SocialMediaIcon.vue';

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
.divider{
    border-top: 2px solid #343a40;
}
</style>
