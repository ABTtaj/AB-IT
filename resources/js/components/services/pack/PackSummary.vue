<template>
    <div 
        class="align-items-center body-bg f-18 flex-column justify-content-between p-4 row text-shadow-sm shadow-xxl h-100"
        :class="{
            'gabriola':!isArabic,
            'al-bayan':isArabic
        }"
    >
        <div class="app-text-danger text-center w-100">
            <div class="f-50">
                {{data.title | translate}}
            </div>
            <div class="f-30 mb-3">
                <template v-if="data.hasDefinedCost">
                    <div>
                        {{data.cost}}
                    </div>
                    <div>
                        {{ 'DEVISE' | translate}}
                    </div>
                </template>
                <template v-else>
                    <div>
                        -
                    </div>
                    <div>
                        {{'PACK_DONT_HAVE_COST' | translate}}
                    </div>
                </template>
            </div>
        </div>
        <div 
            class="w-100"
            v-for="property in data.properties" 
            :key="property"
        >
            <hr class="w-100 m-0">
            <div class="py-3 w-100 text-center raleway f-14">
                {{property | translate}}
            </div>
        </div>
        <router-link 
            tag="div" 
            :to="{name : translate(data.route)}" 
            class="custom-button-style mt-3 f-20"
        >
            {{'BUTTON_LEARN_MORE_PACK' | translate}}
        </router-link>
    </div>
</template>
<script>
export default {
    props:[
        'data'
]
}
</script>
<style scoped>
</style>