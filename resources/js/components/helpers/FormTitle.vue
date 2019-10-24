<template>
    <div class="cursor-pointer" :class="{'text-right custom-padding': isArabic }" @click="blurOnInput">
        <template v-if="selectedLangage ==='fr'">
            <template v-if="input ==='name'">
                <span class="global-style font-size-form-titles">
                    <span :class="{'text-danger':isError,'text-dark':!isError}">Nom</span>
                </span>
            </template>
            <template v-if="input ==='email'">
                <span class="global-style font-size-form-titles">
                    <span :class="{'text-danger':isError,'text-dark':!isError}">Email</span>
                </span>
            </template>
            <template v-if="input ==='phone'">
                <span class="global-style font-size-form-titles">
                    <span :class="{'text-danger':isError,'text-dark':!isError}">Numéro de Téléphone</span>
                </span>
            </template>
            <template v-if="input ==='object'">
                <span class="global-style font-size-form-titles">
                    <span :class="{'text-danger':isError,'text-dark':!isError}">Objet</span>
                </span>
            </template>
            <template v-if="input ==='message'">
                <span class="global-style font-size-form-titles">
                    <span :class="{'text-danger':isError,'text-dark':!isError}">Message</span>
                </span>
            </template>
        </template>
        <template v-if="selectedLangage ==='en'">
            <template v-if="input ==='name'">
                <span class="global-style font-size-form-titles">
                    <span :class="{'text-danger':isError,'text-dark':!isError}">Name</span>
                </span>
            </template>
            <template v-if="input ==='email'">
                <span class="global-style font-size-form-titles">
                    <span :class="{'text-danger':isError,'text-dark':!isError}">Email</span>
                </span>
            </template>
            <template v-if="input ==='phone'">
                <span class="global-style font-size-form-titles">
                    <span :class="{'text-danger':isError,'text-dark':!isError}">Phone Number</span>
                </span>
            </template>
            <template v-if="input ==='object'">
                <span class="global-style font-size-form-titles">
                    <span :class="{'text-danger':isError,'text-dark':!isError}">Object</span>
                </span>
            </template>
            <template v-if="input ==='message'">
                <span class="global-style font-size-form-titles">
                    <span :class="{'text-danger':isError,'text-dark':!isError}">Message</span>
                </span>
            </template>
        </template>
        <template v-if="selectedLangage ==='ma'">
            <template v-if="input ==='name'">
                <span class="global-style font-size-form-titles-arabic">
                    <span :class="{'text-danger':isError,'text-dark':!isError}">الإسم الكامل</span>
                </span>
            </template>
            <template v-if="input ==='email'">
                <span class="global-style font-size-form-titles-arabic">
                    <span :class="{'text-danger':isError,'text-dark':!isError}">البريد الإلكتروني</span>
                </span>
            </template>
            <template v-if="input ==='phone'">
                <span class="global-style font-size-form-titles-arabic">
                    <span :class="{'text-danger':isError,'text-dark':!isError}">رقم الهاتف</span>
                </span>
            </template>
            <template v-if="input ==='object'">
                <span class="global-style font-size-form-titles-arabic">
                    <span :class="{'text-danger':isError,'text-dark':!isError}">موضوع الرسالة</span>
                </span>
            </template>
            <template v-if="input ==='message'">
                <span class="global-style font-size-form-titles-arabic">
                    <span :class="{'text-danger':isError,'text-dark':!isError}">الرسالة</span>
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

<style scoped>
    .custom-padding{
        padding-top:6px;
        padding-bottom:6px;
    }
    .global-style{
        font-family: 'Gabriola';
        text-shadow: 0.5px 0.5px 2px rgba(0,0,0,0.3);
    }
    .global-style-arabic{
        text-shadow: 0.5px 0.5px 2px rgba(0,0,0,0.3);
        font-family: 'Al Bayan';
    }
    .font-size-form-titles{
        font-size: 24px;
    }
    .font-size-form-titles-arabic{
        font-size: 18px;
    }
</style>