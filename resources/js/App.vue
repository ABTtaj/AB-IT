<template>
    <div id="app-container">
        <div class="container">
            <app-header></app-header>
            <transition 
                appear
                enter-active-class="animated zoomIn"
                leave-active-class="animated zoomOut"
                mode="out-in"
            >
                <router-view></router-view>
            </transition>
        </div>
        <app-flash-message></app-flash-message>
    </div>
</template>
 
<script>
import AppHeader from './components/general/Header.vue';
import AppFooter from './components/general/Footer.vue';
import AppFlashMessage from './components/general/FlashMessage.vue';
import { mapGetters } from 'vuex';
export default{
    computed:{
        ...mapGetters([
            'dir'
        ])
    },
    components:{
        AppHeader,
        AppFooter,
        AppFlashMessage
    },
    watch: {
        dir(val) {
            document.body.dir=val;
        }
    },
    created(){
        document.body.dir=this.dir;
    }
}
</script>

<style scoped>
</style>