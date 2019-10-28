<template>
    <div 
        id="app-container" 
        :class="{
            'app-bg-black':darkMode,
            'body-bg':!darkMode
        }"
    >
        <div>
            <app-header></app-header>
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
    </div>
</template>
 
<script>
import AppHeader from './components/general/Header.vue';
import AppFlashMessage from './components/general/FlashMessage.vue';
import { mapGetters } from 'vuex';
export default{
    computed:{
        ...mapGetters([
            'dir',
        ])
    },
    components:{
        AppHeader,
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
#route-viewer{
    transition: margin 500ms ease-out;
}
</style>