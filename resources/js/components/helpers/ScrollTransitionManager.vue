<template>
    <div :ref="id">
        <template v-if="show">
            <transition 
                :enter-active-class="returnAppearAnimationClass()" 
                appear
            >
                <slot></slot>
            </transition>
        </template>
        <template v-if="!show">
            <div v-animate-onscroll="animation">
                <slot></slot>
            </div>
        </template>
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
            animation:'animated '
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
                this.animation += this.scrollAnimationClass;
            }
        },
        addSpeed(){
            this.animation += ' ' + (this.speed ? this.speed : '');
        },
        isAppearOrScrollAnimation(delay){
            setTimeout(()=>{
                const element = this.$refs[this.id];
                this.show = inViewport(element);
                if(!this.show){
                    this.manageFadeAndSlideAnimation(element);
                    this.addSpeed()
                }
            },delay);
        }
    },
    mounted(){
            this.isAppearOrScrollAnimation(1000);
    }
}
</script>
