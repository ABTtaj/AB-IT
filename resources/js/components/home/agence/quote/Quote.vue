<template>
    <div class="row agence-inner-container">
        <scroll-transition-manager 
            class="col-12"
            scroll-animation-class="slide"
            direction="y"
            appear-animation-class="zoomIn"
            speed="slow"
            v-if="index !== 0"
        >
            <hr
                class="agence-divider"  
            >
        </scroll-transition-manager>
        <scroll-transition-manager 
            class="col-md-6 image-container"
            scroll-animation-class="slide"
            :direction="isLessThanMd ? 'y' : 'x'"
            :appear-animation-class="!isLessThanMd ? getAnimationDirection(data.image.direction) : 'zoomIn'"
            speed="slow"
            v-if="data.image.direction == 'left' && !isLessThanMd"
        >
            <img :src="data.image.src" :alt="data.image.src" class="img-fluid drop-shadow mb-2">
        </scroll-transition-manager>
        <div class="col-md-6">
            <scroll-transition-manager 
                class="row"
                scroll-animation-class="slide"
                direction="y"
                appear-animation-class="zoomIn"
                speed="slow"
            >
                <h2 
                    class="col-12 title-container"
                    :class="{
                        'f-80 gabriola':!isArabic,
                        'f-76 al-bayan':isArabic
                    }"
                >
                    {{ data.title | translate }}
                </h2>
            </scroll-transition-manager>
            <scroll-transition-manager 
                class="col-md-6 image-container"
                scroll-animation-class="slide"
                direction="y"
                appear-animation-class="zoomIn"
                speed="slow"
                v-if="isLessThanMd"
            >
                <img :src="data.image.src" :alt="data.image.src" class="img-fluid drop-shadow mb-2">
            </scroll-transition-manager>
            <scroll-transition-manager 
                class="row"
                scroll-animation-class="slide"
                direction="y"
                appear-animation-class="zoomIn"
                speed="slow"
            >
                <div 
                    class="col-12 text-container"
                    :class="{
                        'f-24 gabriola':!isArabic,
                        'f-22 al-bayan':isArabic
                    }"
                >
                    {{ data.text | translate }}
                </div>
            </scroll-transition-manager>
        </div>
        <scroll-transition-manager 
            class="col-md-6 image-container"
            scroll-animation-class="slide"
            :direction="isLessThanMd ? 'y' : 'x'"
            :appear-animation-class="!isLessThanMd ? getAnimationDirection(data.image.direction) : 'zoomIn'"
            speed="slow"
            v-if="data.image.direction == 'right' && !isLessThanMd"
        >
            <img :src="data.image.src" :alt="data.image.src" class="img-fluid drop-shadow mb-2">
        </scroll-transition-manager>
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

.agence-inner-container{
    @extend .align-items-center, .justify-content-around, .px-3, .pt-5, .pb-md-5;
}
.image-container{
    @extend  .text-center, .mb-md-0, .mb-5;
}
.title-container{   
    @extend .my-4, .text-center, .text-shadow, .text-uppercase, .text-break;
}
.text-container{
    @extend .text-center, .text-shadow-sm;
}
.agence-divider{
    @extend .border-top-dark-2, .mb-5,.mt-md-n5, .w-75, .shadow;
}
</style>