<template>
    <transition 
        :enter-active-class="flashContent.where ==='top' ? 'animated slideInDown' : 'animated slideInUp'"
        :leave-active-class="flashContent.where ==='top' ? 'animated slideOutUp' : 'animated slideOutDown'"
        appear
    >
        <div 
            class="custom-flash-message-style py-2 text-center text-white px-2"
            :class="{
                'al-bayan f-20':isArabic,
                'gabriola f-24':!isArabic,
                'bg-white': flashContent.type === 'white',
                'bg-dark': flashContent.type === 'dark',
                'bg-danger': flashContent.type === 'danger',
                'bg-success': flashContent.type === 'success',
                'bg-warning': flashContent.type === 'warning',
                'bg-secondary': flashContent.type === 'secondary',
                'fixed-bottom': flashContent.where === 'bottom',
                'fixed-top': flashContent.where === 'top'
            }" 
            v-html="flashContent.message"
            v-if="flashContent.show"
        >
        </div>
    </transition>
</template>

<script>
import { mapGetters } from 'vuex';
export default{
    computed : {
        ...mapGetters(['flashContent'])
    }
}
</script>

<style scoped>
.custom-flash-message-style{
    opacity:.95;
}
</style>