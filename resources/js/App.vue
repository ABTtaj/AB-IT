<template>
    <div id="app-container">
        <div class="container">
            <app-header></app-header>
            <transition 
                appear
                enter-active-class="animated slideInRight"
                leave-active-class="animated slideOutLeft"
                mode="out-in"
            >
                <router-view></router-view>
            </transition>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from './components/general/Header.vue';
import AppFooter from './components/general/Footer.vue';
export default{
    components:{
        AppHeader,
        AppFooter
    }
}
</script>

<style scoped>
</style>