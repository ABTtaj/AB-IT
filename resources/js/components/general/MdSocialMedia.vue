<template>
    <div 
        class="upper-social-media-md-container"
        :class="{
            'body-bg': !darkMode,
            'app-bg-black': darkMode
        }"
    >
        <div 
            class="social-media-md-item"
            v-for="socialMedia in socialMedias" 
            :key="socialMedia.key + '-key'"
            :id="socialMedia.key + '-md-id'"
            @click="onSocialMediaClicked(socialMedia.key)"
        >
            <div 
                class="social-media-md-icon animated"
                :class="{
                    'app-text-black': !darkMode,
                    'app-text-white': darkMode
                }"
                :id="socialMedia.key + '-md-icon-id'"
            >
                <i :class="socialMedia.icon"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            socialMedias : [
                {
                    key:'facebook-media',
                    icon:'fa fa-facebook',
                    content: 'Facebook AB.IT',
                    link: ''
                },
                {
                    key:'twitter-media',
                    icon:'fa fa-twitter',
                    content: 'Twitter AB.IT',
                    link: ''
                },
                {
                    key:'skype-media',
                    icon:'fa fa-skype',
                    content: 'Skype AB.IT',
                    link: ''
                },
                {
                    key:'linked-in-media',
                    icon:'fa fa-linkedin',
                    content: 'LinkedIn AB.IT',
                    link: ''
                },
            ],
            iconAnimation : 'wobble'
        }
    },
    methods:{
        animateSocialMediaIcon(key){
            let icon = document.getElementById(key + '-md-icon-id');
            icon.classList.add(this.iconAnimation);
        },
        restartSocialMediaIconAnimation(key){
            let icon = document.getElementById(key + '-md-icon-id');
            icon.classList.remove(this.iconAnimation);
        },
        onSocialMediaClicked(key){
            this.animateSocialMediaIcon(key);
            setTimeout(()=>{
                this.restartSocialMediaIconAnimation(key);
            },1000);
        }
    }
}
</script>
<style lang="scss" scoped>

@import '../../../sass/app';

.upper-social-media-md-container{
    @extend .d-flex, .align-items-center, .justify-content-around, .w-100, .shadow-xxl;
    position:fixed;
    bottom:0;

}
.social-media-md-item{
    @extend .d-flex, .align-items-center, .justify-content-around;
    cursor:pointer;
    width:30px;
    height:30px;
}
.social-media-md-icon{
    @extend .f-20;
}

</style>