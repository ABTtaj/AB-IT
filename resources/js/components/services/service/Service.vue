<template>
    <div class="py-3 service-upper-container">
        <div 
            class="service-container bg-danger my-5 px-3" 
            :class="{
                'service-container':!isArabic,
                'service-container-arabic':isArabic
            }" 
            :id="data.id"
        >   
            <div 
                class="row h-100" 
                v-if="widthGreater"
            >
                <div 
                    class="col-5 d-flex justify-content-center align-items-center"
                >
                    <div class="text-center">
                        <img 
                            :src="data.image.url" 
                            :alt="translate(data.image.alt)" 
                            class="img-fluid"
                        >
                    </div>
                </div>
                <div 
                    class="text-center text-white d-flex col-7 align-items-center"
                >
                    <div class="row">
                        <div 
                            class="col-12 text-shadow" 
                            :class="{
                                'gabriola':!isArabic,
                                'al-bayan':isArabic
                            }"
                        >
                            <div 
                                class="font-size-services-hor"
                                :class="{
                                    'd-flex justify-content-center': isArabic
                                }" 
                                v-html="translate(data.title)"
                            ></div>
                        </div>
                        <div 
                            class="col-12 text-shadow font-size-services-quote-hor my-2"
                            :class="{
                                'gabriola':!isArabic,
                                'al-bayan':isArabic
                            }"
                        >
                            <div 
                                v-html="translate(data.quote)"
                            ></div>
                        </div>
                        <div 
                            class="col-12 d-flex justify-content-center my-2"
                        >
                            <router-link 
                                tag="div" 
                                :to="{ name: data.route }" 
                                class="custom-white-button-style font-size-services-button my-xl-3" 
                                :class="{
                                    'gabriola':!isArabic,
                                    'al-bayan':isArabic
                                }"
                            >
                                {{data.action | translate}}
                            </router-link>
                        </div> 
                    </div>
                </div>
            </div>
            <div 
                class="align-items-center flex-column h-100 justify-content-around px-3 row text-center text-white" 
                v-if="!widthGreater"
            >
                <div 
                    class="font-size-services-ver" 
                    :class="{
                        'gabriola':!isArabic,
                        'al-bayan':isArabic
                    }" 
                    v-html="translate(data.title)"
                ></div>
                <img 
                    :src="data.image.url" 
                    :alt="translate(data.image.alt)" 
                    class="img-fluid"
                >
                <div 
                    class="my-2 text-shadow font-size-services-quote-ver" 
                    :class="{
                        'gabriola':!isArabic,
                        'al-bayan':isArabic
                    }" 
                    v-html="translate(data.quote)"
                ></div>
                <router-link 
                    tag="div" 
                    :to="{ name: data.route }" 
                    class="custom-white-button-style font-size-services-button my-xl-3" 
                    :class="{
                        'gabriola':!isArabic,
                        'al-bayan':isArabic
                    }"
                >
                    {{data.action | translate}}
                </router-link>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    props:[
        'data'
    ],
    data(){
        return {
            widthGreater:false
        }
    },
    methods:{
        getWidthGreater(){
            this.widthGreater = window.innerWidth > window.innerHeight ? true : false;
            window.addEventListener('resize',()=>{
                this.widthGreater = window.innerWidth > window.innerHeight ? true : false;
            });
        }
    },
    mounted(){
        this.getWidthGreater();
    }
}
</script>
<style scoped>
.service-upper-container{
    height:100vh;
}
.service-container{
    height: 100%;
    margin-left: calc(-50vw + 50%);
    width: 100vw;
    box-shadow: inset 0 25px 25px -20px rgba(0,0,0,0.8), inset 0 -25px 30px -25px rgba(0,0,0,0.8);
}
.service-container-arabic{
    height: 100%;
    margin-right: calc(-50vw + 50%);
    width: 100vw;
    box-shadow: inset 0 25px 25px -20px rgba(0,0,0,0.8), inset 0 -25px 30px -25px rgba(0,0,0,0.8);
}
.img-vertical{
    margin-top : -5%;
}
</style>