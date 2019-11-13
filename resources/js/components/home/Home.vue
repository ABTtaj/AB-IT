<template>
    <div class="row app-bg-black">
        <upper-block 
            class="col-12"  
            id="upper-home-page"
        ></upper-block>
        <agence 
            class="col-12" 
            id="agence"
        ></agence>
        <services 
            class="col-12" 
            id="services-presentation"
        ></services>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import UpperBlock from './upper-block/UpperBlock.vue'; 
import Agence from './agence/Agence.vue'; 
import Services from './services/Services.vue'; 
export default{
    metaInfo(){
        return {
            titleTemplate: '%s | ' + this.translate('META_TITLE_HOME_PAGE'),
            meta: [{
                vmid: 'description',
                name: 'description',
                content: this.translate('META_DESCRIPTION_HOME_PAGE'),
            }]
        }
    },
    methods:{
        initializeTheHeaderColor(){
            const upperHomePage = document.getElementById('upper-home-page');
            const services = document.getElementById('services-presentation');
            const header = document.getElementById('upper-header-container');
            if(window.scrollY <= upperHomePage.offsetHeight || (services.getBoundingClientRect().top - header.offsetHeight) < 0){
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
        manageDarkModeOfTheHeader(delay){
            setTimeout(()=>{
                this.initializeTheHeaderColor();
                window.addEventListener('scroll',this.updateTheHeaderWhenScrolling);
            },delay);
        }
    },
    mounted(){
        this.manageDarkModeOfTheHeader(800);
    },
    components:{
        UpperBlock,
        Agence,
        Services
    }
}
</script>