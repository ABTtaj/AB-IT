<template>
    <div class="row app-bg-black">
        <upper-block class="col-12"  id="upper-home-page"></upper-block>
        <agence class="col-12" id="agence"></agence>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import UpperBlock from './upper-block/UpperBlock.vue'; 
import Agence from './agence/Agence.vue'; 
export default{
    data(){
        return {
        }
    },
    methods:{
        ...mapActions([
            'switchDarkMode'
        ]),
        initializeTheHeaderColor(){
            const upperHomePage = document.getElementById('upper-home-page');
            if(window.scrollY <= upperHomePage.offsetHeight){
                this.switchDarkMode(true);
            } else {
                this.switchDarkMode(false);
            }
        },
        updateTheHeaderWhenScrolling(){
            if(this.$route.name === "home"){
                this.initializeTheHeaderColor();
            }
        },
        manageDarkModeOfTheHeader(){
            setTimeout(()=>{
                this.initializeTheHeaderColor();
                window.addEventListener('scroll',this.initializeTheHeaderColor);
            },500);
        }
    },
    mounted(){
        this.manageDarkModeOfTheHeader();
    },
    components:{
        UpperBlock,
        Agence
    }
}
</script>

<style lang="scss" scoped>
</style>