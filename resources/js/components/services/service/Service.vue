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
                    <transition 
                        :enter-active-class="isArabic ? 'animated slideInRight slow' : 'animated slideInLeft slow'" 
                        appear
                    >
                        <div 
                            class="text-center"
                            v-if="data.show"
                        >
                            <img 
                                :src="data.image.url" 
                                :alt="translate(data.image.alt)" 
                                class="img-fluid"
                            >
                        </div>
                    </transition>
                </div>
                <div 
                    class="text-center text-white d-flex col-7 justify-content-center"
                >
                    <div class="align-items-center flex-column h-100 justify-content-center row">
                        <transition enter-active-class="animated zoomIn slow" appear>
                            <div 
                                :class="{
                                    'd-flex text-shadow justify-content-center font-size-services-hor-ar al-bayan': isArabic,
                                    'font-size-services-hor gabriola': !isArabic
                                }" 
                                v-if="data.show"
                                v-html="translate(data.title)"
                            ></div>
                        </transition>
                        <transition enter-active-class="animated zoomIn slow" appear>
                            <div 
                                class="text-shadow mt-3 mb-2"
                                :class="{
                                    'gabriola font-size-services-quote-hor':!isArabic,
                                    'al-bayan font-size-services-quote-hor-ar':isArabic
                                }"
                                v-if="data.show"
                                v-html="translate(data.quote)"
                            ></div>
                        </transition>
                        <transition enter-active-class="animated zoomIn slow" appear>
                            <router-link 
                                tag="div" 
                                :to="{ name: data.route }" 
                                class="custom-white-button-style font-size-services-button mt-xl-3" 
                                :class="{
                                    'gabriola':!isArabic,
                                    'al-bayan':isArabic
                                }"
                                v-if="data.show"
                            >
                                {{data.action | translate}}
                            </router-link>
                        </transition>
                    </div>
                </div>
            </div>
            <div 
                class="align-items-center flex-column h-100 justify-content-around px-3 row text-center text-white" 
                v-if="!widthGreater"
            >
                <transition enter-active-class="animated zoomIn slow" appear>
                    <div 
                        :class="{
                            'gabriola font-size-services-ver':!isArabic,
                            'al-bayan font-size-services-ver-ar':isArabic
                        }" 
                        v-if="data.show"
                        v-html="translate(data.title)"
                    ></div>
                </transition>
                <transition enter-active-class="animated zoomIn slow" appear>
                    <div 
                        v-if="data.show"
                    >
                        <img 
                            :src="data.image.url" 
                            :alt="translate(data.image.alt)" 
                            class="img-fluid"
                        >
                    </div>
                </transition>
                <transition enter-active-class="animated zoomIn slow" appear>
                    <div 
                        class="my-2 text-shadow" 
                        :class="{
                            'gabriola font-size-services-quote-ver':!isArabic,
                            'al-bayan font-size-services-quote-ver-ar':isArabic
                        }" 
                        v-if="data.show"
                        v-html="translate(data.quote)"
                    ></div>
                </transition>
                <transition enter-active-class="animated slideInUp slow" appear>
                    <router-link 
                        tag="div" 
                        :to="{ name: data.route }" 
                        class="custom-white-button-style font-size-services-button my-xl-3" 
                        :class="{
                            'gabriola':!isArabic,
                            'al-bayan':isArabic
                        }"
                        v-if="data.show"
                    >
                        {{data.action | translate}}
                    </router-link>
                </transition>
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