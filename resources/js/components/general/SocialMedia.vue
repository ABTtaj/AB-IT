<template>
    <dir 
        class="upper-social-media-container"
        id="upper-social-media-container-id"
    >
        <div 
            class="social-media-container"
            id="social-media-container-id"
        >
            <div 
                class="social-media-item"
                :class="{
                    'body-bg': darkMode,
                    'app-bg-black': !darkMode,
                    'opacity-0':!showSociaMediaMenu,
                    'opacity-1':showSociaMediaMenu
                }"
                v-for="socialMedia in socialMedias"
                v-if="getSocialMediaShowingCondition(socialMedia.key)"
                :key="socialMedia.key + '-key'"
                :id="socialMedia.key + '-id'"
                @mouseleave="restartSocialMediaIconAnimation(socialMedia.key)"
            >
                <div 
                    class="social-media-action" 
                    :id="socialMedia.key + '-action-id'"
                    @mouseover="animateSocialMediaIcon(socialMedia.key)"
                    @click="openSocialMediaTicket(socialMedia.key)"
                >
                    <div 
                        class="social-media-icon animated" 
                        :class="{
                            'app-text-white': !darkMode,
                            'app-text-black': darkMode
                        }"
                        :id="socialMedia.key + '-icon-id'"
                    >
                        <i :class="socialMedia.icon"></i>
                    </div>
                </div>
                <div 
                    class="social-media-link"  
                    :id="socialMedia.key + '-link-id'"
                >
                    <div 
                        class="social-media-link-content"  
                        :class="{
                            'app-text-white': !darkMode,
                            'app-text-black': darkMode
                        }"
                        :id="socialMedia.key + '-link-content-id'"
                    >
                        <bdi>{{socialMedia.content}}</bdi>
                    </div>
                </div>
            </div>
        </div>
    </dir>
</template>

<script>
export default{
    data(){
        return {
            socialMedias : [
                {
                    key:'mail-media',
                    icon:'fa fa-envelope',
                    content: 'contact@ab-it.ma',
                    link: ''
                },
                {
                    key:'phone-media',
                    icon:'fa fa-phone',
                    content: '+(212) 6 379 14 379',
                    link: ''
                },
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
            openedTicket : null,
            showSociaMediaMenu : false,
            iconAnimation : 'wobble'
        }
    },
    computed:{
        containerDirection(){
            return this.isArabic ? 'left' : 'right';
        },
        itemsDirection(){
            return this.isArabic ? 'right' : 'left';
        }
    },
    watch:{
        isArabic(val){
            this.socialMedias.forEach((socialMedia)=>{
                if(this.getSocialMediaShowingCondition(socialMedia.key)){
                    let socialMediaItem = document.getElementById(socialMedia.key + '-id');
                    socialMediaItem.style[this.itemsDirection] = "0px";
                    socialMediaItem.style[this.containerDirection] = "auto";
                }
            }); 
            let socialMediaContainer = document.getElementById('upper-social-media-container-id');
            socialMediaContainer.style[this.containerDirection] = '-' + (socialMediaContainer.offsetWidth - 40) + 'px';
            socialMediaContainer.style[this.itemsDirection] = "auto";
        }
    },
    methods:{
        getSocialMediaShowingCondition(key){
            return (!this.isLessThanMd || key === "mail-media" || key === "phone-media") ;
        },
        getSocialMediaShowingConditionInverce(key){
            return (key !== "mail-media" && key !== "phone-media") ;
        },
        animateSocialMediaIcon(key){
            let icon = document.getElementById(key + '-icon-id');
            icon.classList.add(this.iconAnimation);
        },
        restartSocialMediaIconAnimation(key){
            let icon = document.getElementById(key + '-icon-id');
            icon.classList.remove(this.iconAnimation);
        },
        openSocialMediaTicket(key){
            if(key !== this.openedTicket){
                this.closeSocialMediaTicket(this.openedTicket);
                let socialMediaItem = document.getElementById(key + '-id');
                const socialMediaLink = document.getElementById(key + '-link-id');
                socialMediaItem.style[this.itemsDirection] = '-' + socialMediaLink.offsetWidth + 'px';
                this.openedTicket = key;
            }else{
                this.closeSocialMediaTicket(key);
            }
        },
        closeSocialMediaTicket(key){
            if(key){
                let socialMediaItem = document.getElementById(key + '-id');
                socialMediaItem.style[this.itemsDirection] = '0px';
                this.openedTicket = null;
            }
        },
        initializeSocialMediaContainerPosition(delay){
            setTimeout(()=>{
                let socialMediaContainer = document.getElementById('upper-social-media-container-id');
                socialMediaContainer.style[this.containerDirection] = '-' + (socialMediaContainer.offsetWidth - 40) + 'px';
            },delay);
        },
        initializeSocialMediaTicketsPosition(delay){
            setTimeout(()=>{
                this.socialMedias.forEach((socialMedia)=>{
                    if(this.getSocialMediaShowingCondition(socialMedia.key)){
                        this.closeSocialMediaTicket(socialMedia.key);
                        this.showSociaMediaMenu = true;
                    }
                });
            },delay);
        },
        closeTicketWhenClickingAway(){
            document.addEventListener('click',(event)=>{
                const socialMediaItem = document.getElementById(this.openedTicket + '-id');
                if(socialMediaItem){
                    if(!socialMediaItem.contains(event.target)){
                        this.closeSocialMediaTicket(this.openedTicket);
                    }
                }
            });
        }
    },
    mounted(){
        this.initializeSocialMediaContainerPosition(1000);
        this.initializeSocialMediaTicketsPosition(1000);
        this.closeTicketWhenClickingAway();
    }
}
</script>

<style lang="scss" scoped>

@import '../../../sass/app';

.upper-social-media-container{
    @extend .h-100, .d-flex, .justify-content-center, .align-items-center, .p-0;
    position:fixed;
    top:0;
}
.social-media-container{
    position:relative;
}
.social-media-item{
    @extend .my-2, .d-flex, .body-bg, .shadow-lg;
    cursor:pointer;
    position:relative;
    transition : all 500ms ease-out;
}
.social-media-action{
    @extend .align-items-center, .d-flex, .justify-content-center;
    height : 40px;
    width : 40px;
    min-width : 40px;
    min-height : 40px;
}
.social-media-link{
    @extend .d-flex, .align-items-center, .justify-content-center, .px-3,  .gabriola, .f-22, .w-100;
}
.social-media-icon{
    transition: all 500ms ease-out;
    @extend  .f-20;
}
.opacity-0{
    opacity : 0;
}
.opacity-1{
    opacity : 1;
}
.left-0-right-auto{
    left : 0 !important;
    right : auto !important;
}
.right-0-left-auto{
    right : 0 !important;
    left : auto !important;
}
</style>