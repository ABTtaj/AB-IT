<template>
    <div class="cursor-pointer" :class="{'text-right custom-padding': isArabic }" @click="blurOnInput">
        <template v-if="selectedLangage ==='fr'">
            <template v-if="input ==='name'">
                <span class="global-style">
                    <span :class="{'app-text-danger':isError,'app-text-black':!isError}">Nom</span>
                </span>
            </template>
            <template v-if="input ==='email'">
                <span class="global-style">
                    <span :class="{'app-text-danger':isError,'app-text-black':!isError}">Email</span>
                </span>
            </template>
            <template v-if="input ==='phone'">
                <span class="global-style">
                    <span :class="{'app-text-danger':isError,'app-text-black':!isError}">Numéro de Téléphone</span>
                </span>
            </template>
            <template v-if="input ==='object'">
                <span class="global-style">
                    <span :class="{'app-text-danger':isError,'app-text-black':!isError}">Objet</span>
                </span>
            </template>
            <template v-if="input ==='message'">
                <span class="global-style">
                    <span :class="{'app-text-danger':isError,'app-text-black':!isError}">Message</span>
                </span>
            </template>
        </template>
        <template v-if="selectedLangage ==='en'">
            <template v-if="input ==='name'">
                <span class="global-style">
                    <span :class="{'app-text-danger':isError,'app-text-black':!isError}">Name</span>
                </span>
            </template>
            <template v-if="input ==='email'">
                <span class="global-style">
                    <span :class="{'app-text-danger':isError,'app-text-black':!isError}">Email</span>
                </span>
            </template>
            <template v-if="input ==='phone'">
                <span class="global-style">
                    <span :class="{'app-text-danger':isError,'app-text-black':!isError}">Phone Number</span>
                </span>
            </template>
            <template v-if="input ==='object'">
                <span class="global-style">
                    <span :class="{'app-text-danger':isError,'app-text-black':!isError}">Object</span>
                </span>
            </template>
            <template v-if="input ==='message'">
                <span class="global-style">
                    <span :class="{'app-text-danger':isError,'app-text-black':!isError}">Message</span>
                </span>
            </template>
        </template>
        <template v-if="selectedLangage ==='ma'">
            <template v-if="input ==='name'">
                <span class="global-style-arabic">
                    <span :class="{'app-text-danger':isError,'app-text-black':!isError}">الإسم الكامل</span>
                </span>
            </template>
            <template v-if="input ==='email'">
                <span class="global-style-arabic">
                    <span :class="{'app-text-danger':isError,'app-text-black':!isError}">البريد الإلكتروني</span>
                </span>
            </template>
            <template v-if="input ==='phone'">
                <span class="global-style-arabic">
                    <span :class="{'app-text-danger':isError,'app-text-black':!isError}">رقم الهاتف</span>
                </span>
            </template>
            <template v-if="input ==='object'">
                <span class="global-style-arabic">
                    <span :class="{'app-text-danger':isError,'app-text-black':!isError}">موضوع الرسالة</span>
                </span>
            </template>
            <template v-if="input ==='message'">
                <span class="global-style-arabic">
                    <span :class="{'app-text-danger':isError,'app-text-black':!isError}">الرسالة</span>
                </span>
            </template>
        </template>
        <app-error-message :input="input" :errors="errors"></app-error-message>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppErrorMessage from '../helpers/ErrorMessage.vue';
export default{
    components:{
        AppErrorMessage
    },
    props:[
        'input',
        'errors',
        'for'
    ],
    computed:{
        isError(){
            return this.errors && this.errors.length;
        }
    },
    methods:{
        blurOnInput(){
            document.getElementById(this.for).focus();
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../../sass/app';
    .custom-padding{
        padding-top:6px;
        padding-bottom:6px;
    }
    .global-style{
        @extend .text-shadow-sm;
        font-family: 'Gabriola';
        font-size: 24px;
    }
    .global-style-arabic{
        @extend .text-shadow-sm;
        font-family: 'Al Bayan';
        font-size: 20px;
    }
</style>