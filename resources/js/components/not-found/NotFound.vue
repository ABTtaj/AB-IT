<template>
    <div class="row not-found-container">
        <div 
            class="col-12 not-found-inner-container"
        >
            <h1 
                class="not-found-title"
                :class="{
                    'gabriola f-80' : !isArabic,
                    'al-bayan f-76' : isArabic
                }"
            >
                {{ 'TITLE_NOT_FOUND' | translate }}
            </h1>
            <div 
                class="not-found-text"
                :class="{
                    'gabriola f-24' : !isArabic,
                    'al-bayan f-24' : isArabic
                }"
            >
                {{ 'TEXT_NOT_FOUND' | translate }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            showMessage : false
        }
    },
    methods:{
        initializeTheHeaderColor(){
            this.switchDarkMode(true);
        },
        manageDarkModeOfTheHeader(){
            setTimeout(()=>{
                this.initializeTheHeaderColor();
            },500);
        },
        managePageRedirection(delay){
            setTimeout(()=>{
                this.$router.push({ name : 'home' });
            }, delay);
        }
    },
    mounted(){
        this.manageDarkModeOfTheHeader();
        this.managePageRedirection(5000);
    }
}
</script>
<style lang="scss" scoped>

@import '../../../sass/app';

.not-found-container{
    background-image: url('/images/general_images/attention.png');
    background-size:contain;
    background-position: center;
    background-repeat: no-repeat;
    min-height:100vh;
}
.not-found-inner-container{
    @extend .w-100, .d-flex, .flex-column, .align-items-center, .justify-content-center, .app-text-white, .text-center;
    background-color:rgba(0,0,0,.8);
}
.not-found-title{
    @extend .mb-5;
}
</style>