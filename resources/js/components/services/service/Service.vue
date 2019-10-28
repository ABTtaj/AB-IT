<template>
    <inset-rectangle-background 
        class="py-3 my-5"
        background="danger" 
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
                class="text-center app-text-white d-flex col-7 justify-content-center"
            >
                <div class="align-items-center flex-column h-100 justify-content-center row">
                    <transition enter-active-class="animated zoomIn slow" appear>
                        <div 
                            class=" text-shadow-xl"
                            :class="{
                                'd-flex justify-content-center font-size-services-hor-ar al-bayan': isArabic,
                                'font-size-services-hor gabriola': !isArabic
                            }" 
                            v-if="data.show"
                            v-html="translate(data.title)"
                        ></div>
                    </transition>
                    <transition enter-active-class="animated zoomIn slow" appear>
                        <div 
                            class="text-shadow-xl mt-3 mb-2"
                            :class="{
                                'raleway font-size-services-quote-hor':!isArabic,
                                'al-bayan font-size-services-quote-hor-ar':isArabic
                            }"
                            v-if="data.show"
                            v-html="translate(data.quote)"
                        ></div>
                    </transition>
                    <transition enter-active-class="animated zoomIn slow" appear>
                        <router-link 
                            tag="div" 
                            :to="{ name: translate(data.route) }" 
                            class="text-shadow-xl custom-white-button-style font-size-services-button mt-xl-3" 
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
            class="align-items-center flex-column h-100 justify-content-around px-3 row text-center app-text-white" 
            v-if="!widthGreater"
        >
            <transition enter-active-class="animated zoomIn slow" appear>
                <div 
                    class="text-shadow-xl"
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
                    class="my-2 text-shadow-xl" 
                    :class="{
                        'raleway font-size-services-quote-ver':!isArabic,
                        'al-bayan font-size-services-quote-ver-ar':isArabic
                    }" 
                    v-if="data.show"
                    v-html="translate(data.quote)"
                ></div>
            </transition>
            <transition enter-active-class="animated slideInUp slow" appear>
                <router-link 
                    tag="div" 
                    :to="{ name: translate(data.route) }" 
                    class="text-shadow-xl custom-white-button-style font-size-services-button my-xl-3" 
                    :class="{
                        'raleway':!isArabic,
                        'al-bayan':isArabic
                    }"
                    v-if="data.show"
                >
                    {{data.action | translate}}
                </router-link>
            </transition>
        </div>
    </inset-rectangle-background>
</template>
<script>
import InsetRectangleBackground from '../../helpers/InsetRectangleBackground.vue';
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
    components:{
        InsetRectangleBackground
    },
    mounted(){
        this.getWidthGreater();
    }
}
</script>
<style scoped>
.img-vertical{
    margin-top : -5%;
}
</style>