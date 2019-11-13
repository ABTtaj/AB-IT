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
                <a 
                    class="social-media-link-style"
                    :href="socialMedia.link"
                    target="_blank"
                >
                    <i :class="socialMedia.icon"></i>
                </a>
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
                    key:'mail-media',
                    icon:'fa fa-envelope',
                    link: 'mailto:contact@ab-it.ma'
                },
                {
                    key:'phone-media',
                    icon:'fa fa-phone',
                    link: 'tel:+212637914379'
                },
                {
                    key:'facebook-media',
                    icon:'fa fa-facebook',
                    link: 'fb://facewebmodal/f?href=https://www.facebook.com/ABIT-108523727273458'
                },
                {
                    key:'twitter-media',
                    icon:'fa fa-twitter',
                    link: 'twitter://user?id=ABIT03888925'
                },
                {
                    key:'skype-media',
                    icon:'fa fa-skype',
                    content: 'Skype AB.IT',
                    link: 'skype:live:.cid.9911e619c83ddaa7?username'
                },
                {
                    key:'linked-in-media',
                    icon:'fa fa-linkedin',
                    link: 'https://www.linkedin.com/company/ab-it-maroc'
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
    @extend .d-flex, .align-items-center, .justify-content-around, .w-100, .shadow-xxl, .py-1;
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
.social-media-link-style{
    transition: 500ms all ease-out;
    color:inherit;
    text-decoration: none;
    &:hover{
        color:inherit;
        text-decoration: none;
    }   
}
</style>