<template>
    <transition-group
        name="slide"
        tag="ul"
        class="pl-4 mt-1 mb-0"
        v-if="errors && errors.length"
    >
        <li 
            v-for="error in errors" 
            :key="input+'_'+error" 
            class="text-danger text-shadow" 
            :class="{
                'al-bayan arabic-error-message-size text-right': isArabic,
                'gabriola f-18 text-left' : !isArabic
            }"
        >
            {{'CONTACT_ERROR_'+input.toUpperCase()+'_'+error | translate}}
        </li>
    </transition-group>
</template>

<script>
export default{
    props:[
        'input',
        'errors'
    ]
}
</script>
<style scoped>
</style>