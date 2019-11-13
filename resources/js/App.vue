<template>
    <div 
        id="app-container" 
        :class="{
            'app-bg-black':darkMode,
            'body-bg':!darkMode
        }"
    >
        <div class="container-fluid">
            <app-header
                v-if="getRoutesCondition()"
            ></app-header>
            <transition 
                appear
                enter-active-class="animated slideInDown"
                leave-active-class="animated slideOutUp"
                mode="out-in"
            >
                <router-view 
                    :style="{
                        'padding-top' : paddingTop
                    }"
                    id="route-viewer"
                ></router-view>
            </transition>
        </div>
        <app-flash-message></app-flash-message>
        <app-social-media
            v-if="showMoreThanMd && getRoutesCondition()">
        </app-social-media>
        <transition
            enter-active-class="animated slideInUp"
            appear
        >
            <app-md-social-media  
                v-if="showLessThanMd && getRoutesCondition()"
            ></app-md-social-media>
        </transition>
    </div>
</template>
 
<script>
import AppHeader from './components/general/Header.vue';
import AppFlashMessage from './components/general/FlashMessage.vue';
import AppSocialMedia from './components/general/SocialMedia.vue';
import AppMdSocialMedia from './components/general/MdSocialMedia.vue';
import { mapGetters } from 'vuex';
export default{
    metaInfo(){
        return {
            title: 'AB.IT',
            htmlAttrs: {
                lang: this.selectedLangage,
                amp: true
            }
        }
    },
    data(){
        return {
            showMoreThanMd : false,
            showLessThanMd : false
        }
    },
    computed:{
        ...mapGetters([
            'dir',
        ]),

    },
    components:{
        AppHeader,
        AppFlashMessage,
        AppSocialMedia,
        AppMdSocialMedia
    },
    watch: {
        dir(val) {
            document.body.dir=val;
        }
    },
    methods:{
        decideWhichSocialMediaPutWhenResizing(){
            window.addEventListener('resize',()=>{
                this.showMoreThanMd = !this.isLessThanMd;
                this.showLessThanMd = this.isLessThanMd;
            })
        },
        decideWhichSocialMediaPut(delay){
            setTimeout(()=>{
                this.showMoreThanMd = !this.isLessThanMd;
                this.showLessThanMd = this.isLessThanMd;
            },delay);
        },
        getRoutesCondition(){
            return this.$route.name !== 'admin' && this.$route.name !== 'back-office' && this.$route.name !== 'not-found';
        }
    },
    mounted(){
        this.decideWhichSocialMediaPut(1000);
        this.decideWhichSocialMediaPutWhenResizing();
    },
    created(){
        document.body.dir=this.dir;
    }
}
</script>

<style scoped>
#route-viewer{
    transition: margin 500ms ease-out;
}
</style>