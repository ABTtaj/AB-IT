<template>
    <div class="container">
        <app-header></app-header>
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