<template>
    <div class="agence-container">
        <div class="row agence-inner-container">
            <div class="col-md-6 text-center">
                <scroll-transition-manager 
                    scroll-animation-class="slide"
                    direction="y"
                    appear-animation-class="zoomIn"
                    speed="slow"
                    id="mission-image" 
                >
                    <img src="/images/general_images/mission.png" alt="" class="img-fluid drop-shadow mb-2">
                </scroll-transition-manager>
            </div>
            <div class="col-md-6">
                <scroll-transition-manager 
                    scroll-animation-class="zoomIn"
                    appear-animation-class="zoomIn"
                    speed="slow"
                    id="mission-text" 
                >
                    <div class="row">
                        <div 
                            class="col-12 title-container"
                            :class="{
                                'f-80 gabriola':!isArabic,
                                'f-76 al-bayan':isArabic
                            }"
                        >
                            {{'TITLE_HOME_AGENCE_MISSION' | translate }}
                        </div>
                        <div 
                            class="col-12 text-container"
                            :class="{
                                'f-22 gabriola':!isArabic,
                                'f-20 al-bayan':isArabic
                            }"
                        >
                            {{'TEXT_HOME_AGENCE_MISSION' | translate }}
                        </div>
                    </div>
                </scroll-transition-manager>
            </div>
        </div>
        <div class="row agence-inner-container">
            <div 
                class="col-md-6 text-center" 
                v-if="widthLessThanMd"
            >
                <scroll-transition-manager 
                    scroll-animation-class="slide"
                    direction="y"
                    appear-animation-class="zoomIn"
                    speed="slow"
                    id="vision-image" 
                >
                    <img src="/images/general_images/vision.png" alt="" class="img-fluid drop-shadow mb-2">
                </scroll-transition-manager>
            </div>
            <div class="col-md-6">
                <scroll-transition-manager 
                    scroll-animation-class="zoomIn"
                    appear-animation-class="zoomIn"
                    speed="slow"
                    id="vision-text" 
                >
                    <div class="row">
                        <div 
                            class="col-12 title-container"
                            :class="{
                                'f-80 gabriola':!isArabic,
                                'f-76 al-bayan':isArabic
                            }"
                        >
                            {{'TITLE_HOME_AGENCE_VISION' | translate }}
                        </div>
                        <div 
                            class="col-12 text-container"
                            :class="{
                                'f-22 gabriola':!isArabic,
                                'f-20 al-bayan':isArabic
                            }"
                        >
                            {{'TEXT_HOME_AGENCE_VISION' | translate }}
                        </div>
                    </div>
                </scroll-transition-manager>
            </div>
            <div 
                class="col-md-6 text-center" 
                v-if="!widthLessThanMd"
            >
                <scroll-transition-manager 
                    scroll-animation-class="slide"
                    direction="y"
                    appear-animation-class="zoomIn"
                    speed="slow"
                    id="vision-image" 
                >
                    <img src="/images/general_images/vision.png" alt="" class="img-fluid drop-shadow mb-2">
                </scroll-transition-manager>
            </div>
        </div>
        <div class="row agence-inner-container">
            <div 
                class="col-md-6 text-center" 
            >
                <scroll-transition-manager 
                    scroll-animation-class="slide"
                    direction="y"
                    appear-animation-class="zoomIn"
                    speed="slow"
                    id="promise-image" 
                >
                    <img src="/images/general_images/promise.png" alt="" class="img-fluid drop-shadow mb-2">
                </scroll-transition-manager>
            </div>
            <div class="col-md-6">
                <scroll-transition-manager 
                    scroll-animation-class="zoomIn"
                    appear-animation-class="zoomIn"
                    speed="slow"
                    id="promise-text" 
                >
                    <div class="row">
                        <div 
                            class="col-12 title-container"
                            :class="{
                                'f-80 gabriola':!isArabic,
                                'f-76 al-bayan':isArabic
                            }"
                        >
                            {{'TITLE_HOME_AGENCE_PROMISE' | translate }}
                        </div>
                        <div 
                            class="col-12 text-container"
                            :class="{
                                'f-22 gabriola':!isArabic,
                                'f-20 al-bayan':isArabic
                            }"
                        >
                            {{'TEXT_HOME_AGENCE_PROMISE' | translate }}
                        </div>
                    </div>
                </scroll-transition-manager>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            widthLessThanMd:null
        }
    },
    mounted(){
        this.widthLessThanMd = this.widthLessThan('md');
        window.addEventListener('resize',()=>{
            this.widthLessThanMd = this.widthLessThan('md');
        })
    }
}
</script>

<style lang="scss" scoped>
@import '../../../../sass/app'; 

.agence-container{
    @extend .body-bg, .inset-top-shadow-xxl, .inset-bottom-shadow-xxl, .pb-5;
}
.agence-inner-container{
    @extend .align-items-center, .justify-content-around, .px-3, .pt-5, .pb-md-5;
}
.title-container{   
    @extend .my-4, .text-center, .text-shadow, .text-uppercase;
}
.text-container{
    @extend .text-center, .text-shadow-sm;
}
</style>