<template>
    <div class="agence-container">
        <div class="row agence-inner-container">
            <div class="col-md-6 text-center">
                <img src="/images/general_images/mission.png" alt="" class="img-fluid drop-shadow mb-2">
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div 
                        class="col-12 title-container"
                        :class="{
                            'f-80 gabriola':!isArabic,
                            'f-76 al-bayan':isArabic
                        }"
                    >
                        Our Mission
                    </div>
                    <div 
                        class="col-12 text-container"
                        :class="{
                            'f-22 gabriola':!isArabic,
                            'f-20 al-bayan':isArabic
                        }"
                    >
                        Suspendisse ac porttitor ex, ut suscipit nulla. Nullam neque neque, egestas vitae orci vel, facilisis volutpat nunc. Phasellus egestas neque ut tortor suscipit semper. Sed eget nunc mollis, tempus augue quis, facilisis tellus. Duis egestas lectus nec condimentum imperdiet. Vivamus luctus ipsum vitae efficitur aliquam. 
                    </div>
                </div>
            </div>
        </div>
        <div class="row agence-inner-container">
            <div 
                class="col-md-6 text-center" 
                v-if="widthLessThanMd"
            >
                <img src="/images/general_images/vision.png" alt="" class="img-fluid drop-shadow mb-2">
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div 
                        class="col-12 title-container"
                        :class="{
                            'f-80 gabriola':!isArabic,
                            'f-76 al-bayan':isArabic
                        }"
                    >
                        Our Vision
                    </div>
                    <div 
                        class="col-12 text-container"
                        :class="{
                            'f-22 gabriola':!isArabic,
                            'f-20 al-bayan':isArabic
                        }"
                    >
                        Aliquam euismod est ut augue pharetra blandit. Donec aliquam egestas nunc ut suscipit. Duis iaculis euismod eros sit amet convallis. Sed vel ex nisi. Duis efficitur luctus felis nec blandit. Donec id turpis viverra, tristique nibh nec, mattis erat. Aenean venenatis imperdiet mi, at tempor ligula consequat a.                    </div>
                </div>
            </div>
            <div 
                class="col-md-6 text-center" 
                v-if="!widthLessThanMd"
            >
                <img src="/images/general_images/vision.png" alt="" class="img-fluid drop-shadow mb-2">
            </div>
        </div>
        <div class="row agence-inner-container">
            <div 
                class="col-md-6 text-center" 
            >
                <img src="/images/general_images/promise.png" alt="" class="img-fluid drop-shadow mb-2">
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div 
                        class="col-12 title-container"
                        :class="{
                            'f-80 gabriola':!isArabic,
                            'f-76 al-bayan':isArabic
                        }"
                    >
                        Our Promise
                    </div>
                    <div 
                        class="col-12 text-container"
                        :class="{
                            'f-22 gabriola':!isArabic,
                            'f-20 al-bayan':isArabic
                        }"
                    >
                        Vestibulum tempor nunc nec molestie venenatis. Donec lobortis nisi id est semper tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac viverra diam. Pellentesque sit amet quam libero. Pellentesque id imperdiet ex.                
                    </div>
                </div>
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
    @extend .body-bg, .inset-top-shadow-xxl, .pb-5;
}
.agence-inner-container{
    @extend .align-items-center, .justify-content-around, .px-3, .pt-5, .pb-md-5;
}
.title-container{   
    @extend .my-4, .text-center, .text-shadow, .title-container;
}
.text-container{
    @extend .text-center, .text-shadow-sm;
}
</style>