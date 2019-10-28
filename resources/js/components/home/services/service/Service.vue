<template>
    <div class="service-container">
        <hr 
            class="service-divider"  
            v-if="index !== 0"
        >
        <div class="row">
            <scroll-transition-manager 
                class="col-md-6 service-image-container" 
                v-if="data.image.direction === 'left' && !isLessThanMd"
                scroll-animation-class="slide"
                :direction="isLessThanMd ? 'y' : 'x'"
                :appear-animation-class="!isLessThanMd ? getAnimationDirection() : 'zoomIn'"
                speed="slow"
                :id="'service-image-left'+ '-' +data.key" 
            >
                <img 
                    :src="data.image.src" 
                    :alt="translate(data.image.alt)" 
                    class="img-fluid"
                >
            </scroll-transition-manager>
            <div class="col-md-6 service-text-container">
                <scroll-transition-manager 
                    class="service-title" 
                    :class="{
                        'f-60 gabriola' : !isArabic,
                        'f-56 al-bayan' : isArabic
                    }"
                    scroll-animation-class="slide"
                    direction="y"
                    appear-animation-class="zoomIn"
                    speed="slow"
                    id="service-title" 
                >
                    {{ data.title | translate }}
                </scroll-transition-manager>
                <scroll-transition-manager 
                    class="service-image-container" 
                    v-if="isLessThanMd"
                    scroll-animation-class="slide"
                    direction="y"
                    appear-animation-class="zoomIn"
                    speed="slow"
                    :id="'service-image-center'+ '-' +data.key" 
                >
                    <img 
                        :src="data.image.src" 
                        :alt="translate(data.image.alt)" 
                        class="img-fluid"
                    >
                </scroll-transition-manager>
                <scroll-transition-manager 
                    scroll-animation-class="slide"
                    direction="y"
                    appear-animation-class="zoomIn"
                    speed="slow"
                    id="service-text" 
                    class="service-text"
                    :class="{
                        'f-22 gabriola' : !isArabic,
                        'f-20 al-bayan' : isArabic
                    }"
                >
                    {{ data.text | translate }}
                </scroll-transition-manager>
                <scroll-transition-manager 
                    scroll-animation-class="slide"
                    direction="y"
                    appear-animation-class="zoomIn"
                    speed="slow"
                    id="service-action" 
                >
                    <router-link
                        :to="{ 
                            name : translate(data.route)
                        }"
                        tag="div"
                        class="service-button"
                        :class="{
                            'f-22 gabriola' : !isArabic,
                            'f-20 al-bayan' : isArabic
                        }"
                    >
                        {{ 'BUTTON_LEARN_MORE_PACK' | translate}}
                    </router-link>
                </scroll-transition-manager>
            </div>
            <scroll-transition-manager 
                class="col-md-6 service-image-container" 
                v-if="data.image.direction === 'right' && !isLessThanMd"
                scroll-animation-class="slide"
                :direction="isLessThanMd ? 'y' : 'x'"
                :appear-animation-class="!isLessThanMd ? getAnimationDirection() : 'zoomIn'"
                speed="slow"
                :id="'service-image-right'+ '-' +data.key" 
            >
                <img 
                    :src="data.image.src" 
                    :alt="translate(data.image.alt)" 
                    class="img-fluid"
                >
            </scroll-transition-manager>
        </div>
    </div>
</template>
<script>
export default {
    props:[
        'data',
        'index'
    ],
    methods:{
        getAnimationDirection(){
            if(this.data.image.direction === 'left'){
                if(this.isArabic){
                    return 'slideInRight';
                } else {
                    return 'slideInLeft';
                }
            } else {
                if(this.isArabic){
                    return 'slideInLeft';
                } else {
                    return 'slideInRight';
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>

@import '../../../../../sass/app'; 

.service-container{
    @extend .px-4, .mb-5;
}
.service-image-container{
    @extend .text-center, .d-flex, .flex-column, .justify-content-center, .align-items-center, .mb-md-0, .mb-5;
}
.service-text-container{
    @extend .d-flex, .flex-column, .justify-content-center;
}
.service-title{
    @extend .my-4, .text-center;
}
.service-text{
    @extend .text-center;
}
.service-button{
    transition : all 500ms ease-out;
    height:57px;
    @extend .app-bg-black, .app-text-white, .border-white-2, .cursor-pointer, .p-2, .text-center, .shadow-lg, .w-95, .text-shadow-sm, .mx-auto, .mt-5, .d-flex, .align-items-center, .justify-content-center;
    &:hover{
        @extend .app-bg-danger, .app-text-white, .w-100;
    }
}
.service-divider{
    @extend .border-top-white-2, .my-5, .w-75;
}
</style>