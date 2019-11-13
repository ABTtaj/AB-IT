<template>
    <div class="col-12 service-description-container">
        <div class="row service-description-inner-container">
            <scroll-transition-manager 
                class="col-md-6 service-description-image-container"
                v-if="data.image.direction === 'left' && !isLessThanMd"
                scroll-animation-class="slide"
                :direction="isLessThanMd ? 'y' : 'x'"
                :appear-animation-class="getAnimationDirection(data.image.direction)"
                speed="slow"
            >
                <img 
                    :src="data.image.src" 
                    :alt="translate(data.image.alt)"
                    class="img-fluid drop-shadow"
                >
            </scroll-transition-manager>
            <div class="col-md-6 service-description-content">
                <scroll-transition-manager 
                    class="service-description-title"
                    scroll-animation-class="slide"
                    direction="y"
                    appear-animation-class="zoomIn"
                    speed="slow"
                >
                    <h2
                        :class="{
                            'f-60 gabriola' : !isArabic,
                            'f-56 al-bayan' : isArabic
                        }"
                    >
                        {{ data.title | translate }}
                    </h2>
                </scroll-transition-manager>
                <scroll-transition-manager 
                    class="service-description-image-container my-4"
                    v-if="isLessThanMd"
                    scroll-animation-class="slide"
                    direction="y"
                    appear-animation-class="zoomIn"
                    speed="slow"
                >
                    <img 
                        :src="data.image.src" 
                        :alt="translate(data.image.alt)"
                        class="img-fluid drop-shadow"
                    >
                </scroll-transition-manager>
                <scroll-transition-manager 
                    class="service-description-text"
                    :class="{
                        'f-24 gabriola' : !isArabic,
                        'f-22 al-bayan' : isArabic
                    }"
                    scroll-animation-class="slide"
                    direction="y"
                    appear-animation-class="zoomIn"
                    speed="slow"
                >
                    <div>
                        {{ data.description | translate }}
                    </div>
                </scroll-transition-manager>
            </div>
            <scroll-transition-manager 
                class="col-md-6 service-description-image-container"
                v-if="data.image.direction === 'right' && !isLessThanMd"
                scroll-animation-class="slide"
                :direction="isLessThanMd ? 'y' : 'x'"
                :appear-animation-class="getAnimationDirection(data.image.direction)"
                speed="slow"
            >
                <img 
                    :src="data.image.src" 
                    :alt="translate(data.image.alt)"
                    class="img-fluid drop-shadow"
                >
            </scroll-transition-manager>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'data'
    ]
    
}
</script>

<style lang="scss" scoped>

@import '../../../../sass/app';

.service-description-container{
 @extend .mb-5, .px-4, .px-md-5;
}
.service-description-content{
    @extend .d-flex, .flex-column, .justify-content-center, .align-items-center, .text-center, .text-shadow-sm;
}
.service-description-title{
    @extend .mb-4;
}
</style>