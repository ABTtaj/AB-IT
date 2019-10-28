<template>
    <transition 
        :enter-active-class="flashContent.where ==='top' ? 'animated slideInDown' : 'animated slideInUp'"
        :leave-active-class="flashContent.where ==='top' ? 'animated slideOutUp' : 'animated slideOutDown'"
        appear
    >
        <div 
            class="flash-message"
            :class="{
                'al-bayan f-20':isArabic,
                'gabriola f-24':!isArabic,
                'bg-white': flashContent.type === 'white',
                'app-bg-black': flashContent.type === 'dark',
                'app-bg-danger': flashContent.type === 'danger',
                'bg-success': flashContent.type === 'success',
                'bg-warning': flashContent.type === 'warning',
                'bg-secondary': flashContent.type === 'secondary',
                'fixed-bottom': flashContent.where === 'bottom',
                'fixed-top': flashContent.where === 'top'
            }" 
            v-html="flashContent.message"
            v-if="flashContent.show"
            @click="toggleFlash"
        >
        </div>
    </transition>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default{
    computed : {
        ...mapGetters(['flashContent'])
    },
    methods:{
        ...mapActions([
            'toggleFlash'
        ])
    }
}
</script>

<style lang="scss" scoped>
@import '../../../sass/app';
.flash-message{
    @extend .text-center, .app-text-white, .p-2;
    opacity:.95;
}
</style>