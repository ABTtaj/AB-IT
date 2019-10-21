<template>
    <div class="row">
        <div class="col-md-12 text-center">
            <app-title category="services"></app-title>
        </div>
        <div class="col-md-12">
            <service></service>
        </div>
    </div>
</template>

<script>
import AppTitle from '../helpers/Title.vue';
import Service from './Service.vue';
export default{
    components:{
        AppTitle,
        Service
    }
}
</script>

<style scoped>

</style>