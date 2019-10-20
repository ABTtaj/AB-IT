<template>
    <div class="cursor-pointer">
        <img src="../../../images/general_images/black_bulb_off.png" alt="Black Bulb" class="img-fluid" @click="makeBulbOn" v-show="!isOn">
        <img src="../../../images/general_images/black_bulb_on.png" alt="Yellow Bulb" class="img-fluid" v-show="isOn" @click="makeBulbOff">
    </div>
</template>

<script>
export default{
    data(){
        return {
            isOn:false
        }
    },
    methods:{
        makeBulbOn(){
            this.isOn = true;
        },
        makeBulbOff(){
            this.isOn = false;
        }
    },
    created(){
        setTimeout(()=>{
            this.isOn = true;
        },3000);
    }
}
</script>

<style scoped>

</style>