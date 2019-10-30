<template>
    <div 
        ref="primary-div" 
        class="animated" 
        :class="[show ? '' : 'opacity-0']"
    >
        <transition 
            :enter-active-class="returnAppearAnimationClass()" 
            appear
        >
                <slot></slot>
        </transition>
    </div>
</template>
<script>
import inViewport from 'in-viewport';
export default {
    props:[
        'id',
        'direction',
        'scrollAnimationClass',
        'appearAnimationClass',
        'speed'
    ],
    data(){
        return {
            show:true,
            animation:''
        }
    },
    methods:{
        returnAppearAnimationClass(){
            return 'animated ' + this.appearAnimationClass  + ' ' + ( this.speed ? this.speed : '');
        },
        isTheElementInTopOrBottom(element){
            if(element.getBoundingClientRect().top > 0 ){
                this.animation += this.scrollAnimationClass + 'InUp';
            } else {
                this.animation += this.scrollAnimationClass + 'InDown';
            }
        },
        isTheElementInTheRightOrLeft(element){
            if((element.getBoundingClientRect().x + (element.offsetWidth/2) - (window.innerWidth/2)) > 0 ){
                this.animation += this.scrollAnimationClass + 'InRight';
            } else {
                this.animation += this.scrollAnimationClass + 'InLeft';
            }
        },
        manageFadeAndSlideAnimation(element){
            if(this.scrollAnimationClass === 'fade' || this.scrollAnimationClass === 'slide'){
                if(this.direction == 'y'){
                    this.isTheElementInTopOrBottom(element);
                } else {
                    this.isTheElementInTheRightOrLeft(element);
                }
            } else {
                this.animation = this.scrollAnimationClass;
            }
        },
        onElementInViewport(element){
            element.style.opacity = 1;
            element.classList.add(this.animation);
        },
        isAppearOrScrollAnimation(delay){
            setTimeout(()=>{
                const element = this.$refs['primary-div'];
                if(element){
                    this.show = inViewport(element);
                    if(!this.show){
                        this.manageFadeAndSlideAnimation(element);
                        inViewport(element,this.onElementInViewport);
                    }
                }
            },delay);
        }
    },
    mounted(){
        this.isAppearOrScrollAnimation(1000);
    }
}
</script>
<style lang="scss">
.opacity-0{
    opacity : 0;
}
</style>