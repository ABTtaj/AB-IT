<template>
    <div class="agence-container">
        <quote 
            v-for="(quote,index) in quotes" 
            :key="quote.key" 
            :data="quote" 
            :index="index"
        ></quote>
    </div>
</template>

<script>
import Quote from './quote/Quote.vue';
export default{
    data(){
        return {
            quotes:[
                {
                    key:"mission-quote",
                    title:"TITLE_HOME_AGENCE_MISSION",
                    text:"TEXT_HOME_AGENCE_MISSION",
                    image:{
                        src:"/images/general_images/cerveau-creativite.png",
                        alt:"ALT_AGENCE_QUOTE_MISSION",
                        direction:"left"
                    }
                },
                {
                    key:"vision-quote",
                    title:"TITLE_HOME_AGENCE_VISION",
                    text:"TEXT_HOME_AGENCE_VISION",
                    image:{
                        src:"/images/general_images/construction-developpement-web.png",
                        alt:"ALT_AGENCE_QUOTE_VISION",
                        direction:"right"
                    }
                },
                {
                    key:"promise-quote",
                    title:"TITLE_HOME_AGENCE_PROMISE",
                    text:"TEXT_HOME_AGENCE_PROMISE",
                    image:{
                        src:"/images/general_images/croissance-finance-entreprenariat.png",
                        alt:"ALT_AGENCE_QUOTE_PROMISE",
                        direction:"left"
                    }
                }
            ]
        }
    },
    components:{
        Quote
    }
}
</script>

<style lang="scss" scoped>

@import '../../../../sass/app'; 

.agence-container{
    @extend .body-bg, .inset-y-shadow-xxl, .pb-5;
}
</style>