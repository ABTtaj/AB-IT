<template>
    <div :class="{'h-100':fullHeight}">
        <template v-if="show">
            <transition 
                :enter-active-class="animationClass" 
                appear
            >
                <slot></slot>
            </transition>
        </template>
        <template v-if="!show">
            <div :class="{'h-100':fullHeight}" v-animate-onscroll="animationClass">
                <slot></slot>
            </div>
        </template>
    </div>
</template>
<script>
export default {
    props:[
        'show',
        'animationClass',
        'fullHeight'
    ]
}
</script>
