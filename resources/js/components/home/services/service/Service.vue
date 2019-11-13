<template>
    <div class="service-container">
        <div class="row h-100">
            <scroll-transition-manager 
                class="col-12" 
                scroll-animation-class="slide"
                direction="y"
                appear-animation-class="zoomIn"
                speed="slow"
                v-if="index !== 0"
            >
                <hr 
                    class="service-divider"  
                >
            </scroll-transition-manager>
            <scroll-transition-manager 
                class="col-md-6 service-image-container" 
                v-if="data.image.direction === 'left' && !isLessThanMd"
                scroll-animation-class="slide"
                :direction="isLessThanMd ? 'y' : 'x'"
                :appear-animation-class="getAnimationDirection(data.image.direction)"
                speed="slow"
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
                    scroll-animation-class="slide"
                    direction="y"
                    appear-animation-class="zoomIn"
                    speed="slow"
                >
                    <h3
                        :class="{
                            'f-60 gabriola' : !isArabic,
                            'f-56 al-bayan' : isArabic
                        }"
                    >
                        {{ data.title | translate }}
                    </h3>
                </scroll-transition-manager>
                <scroll-transition-manager 
                    class="service-image-container" 
                    v-if="isLessThanMd"
                    scroll-animation-class="slide"
                    direction="y"
                    appear-animation-class="zoomIn"
                    speed="slow"
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
                    class="service-text"
                    :class="{
                        'f-24 gabriola' : !isArabic,
                        'f-22 al-bayan' : isArabic
                    }"
                >
                    <div>
                        {{ data.text | translate }}
                    </div>
                </scroll-transition-manager>
                <scroll-transition-manager 
                    scroll-animation-class="slide"
                    direction="y"
                    appear-animation-class="zoomIn"
                    speed="slow"
                >
                    <router-link
                        :to="{ 
                            name : translate(data.route)
                        }"
                        tag="div"
                        class="service-button"
                        :class="{
                            'f-24 gabriola' : !isArabic,
                            'f-22 al-bayan' : isArabic
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
                :appear-animation-class="!isLessThanMd ? getAnimationDirection(data.image.direction) : 'zoomIn'"
                speed="slow"
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
    ]
}
</script>
<style lang="scss" scoped>

@import '../../../../../sass/app'; 

.service-container{
    @extend .mb-5, .d-flex, .flex-column, .justify-content-around, .align-items-center;
    min-height:100vh;
}
.service-image-container{
    @extend .text-center, .d-flex, .flex-column, .justify-content-center, .align-items-center, .mb-md-0, .mb-5;
}
.service-text-container{
    @extend .d-flex, .flex-column, .justify-content-center;
}
.service-title{
    @extend .my-4, .text-center, .text-break;
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