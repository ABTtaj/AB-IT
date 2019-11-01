<template>
    <div @click="switchInv">
        <template v-if="selectedLangage ==='fr'">
            <template v-if="category ==='agence'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">Qui <span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">Sommes-</span>Nous <span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">?</span></span>
                </span>
            </template>
            <template v-if="category ==='services'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">Nos </span><span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">Services</span>
                </span>
            </template>
            <template v-if="category ==='website'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">Création de </span><span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">Site </span><span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">Web</span>
                </span>
            </template>
            <template v-if="category ==='e-commerce'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">Solutions </span><span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">E-Commerce</span>            
                </span>
            </template>
            <template v-if="category ==='marketing-digital'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">Marketing </span><span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">Digital</span>            
                </span>
            </template>
            <template v-if="category ==='seo'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">Référencement </span><span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">Naturel</span>            
                </span>
            </template>
            <template v-if="category ==='trainings'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">Formations & </span><span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">Conseils</span>            
                </span>
            </template>
            <template v-if="category ==='contact'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">Contactez-</span><span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">Nous</span><span :class="{'text-danger':isInverse,'app-text-black':!isInverse}"> !</span>
                </span>
            </template>
        </template>
        <template v-if="selectedLangage ==='en'">
            <template v-if="category ==='agence'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">The </span><span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">Agency</span>
                </span>
            </template>
            <template v-if="category ==='services'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">Our </span><span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">Services</span>
                </span>
            </template>
            <template v-if="category ==='website'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">Web </span><span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">Development</span>
                </span>
            </template>
            <template v-if="category ==='e-commerce'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">E-Commerce </span><span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">Solutions</span>        
                </span>
            </template>
            <template v-if="category ==='marketing-digital'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">Digital </span><span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">Marketing</span>            
                </span>
            </template>
            <template v-if="category ==='seo'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">Search </span><span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">Engine</span><span :class="{'text-danger':isInverse,'app-text-black':!isInverse}"> Optimization</span>           
                </span>
            </template>
            <template v-if="category ==='trainings'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">Trainings & </span><span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">Advices</span>            
                </span>
            </template>
            <template v-if="category ==='contact'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">Contact</span><span :class="{'text-danger':!isInverse,'app-text-black':isInverse}"> Us</span><span :class="{'text-danger':isInverse,'app-text-black':!isInverse}"> !</span>
                </span>
            </template>
        </template>
        <template v-if="selectedLangage ==='ma'">
            <template v-if="category ==='agence'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">شكون </span><span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">حنا </span><span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">؟</span>
                </span>
            </template>
            <template v-if="category ==='services'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">خـدمــا</span><span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">تـنــا</span>
                </span>
            </template>
            <template v-if="category ==='website'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">تطوير مواقع</span><span :class="{'text-danger':isInverse,'app-text-black':!isInverse}"> الإنترنت</span>
                </span>
            </template>
            <template v-if="category ==='e-commerce'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">حلولنا للـ </span><span :class="{'text-danger':!isInverse,'app-text-black':isInverse}" class="global-style">E-Commerce</span>      
                </span>
            </template>
            <template v-if="category ==='marketing-digital'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">التسويق </span><span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">الرقمي</span>            
                </span>
            </template>
            <template v-if="category ==='seo'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">تحسين </span><span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">محركات </span><span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">البحث</span>           
                </span>
            </template>
            <template v-if="category ==='trainings'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">دورات تعليمية </span><span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">و نصائح</span>            
                </span>
            </template>
            <template v-if="category ==='contact'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">اتّصلوا </span><span :class="{'text-danger':!isInverse,'app-text-black':isInverse}">بنا </span><span :class="{'text-danger':isInverse,'app-text-black':!isInverse}">!</span>
                </span>
            </template>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default{
    props:[
        'category'
    ],
    data(){
        return {
            isInverse:false
        }
    },
    computed:{
        ...mapGetters([
            'selectedLangage'
        ])
    },
    methods:{
        switchInv(){
            this.isInverse = this.isInverse ? false : true;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../../sass/app';
    .global-style{
        @extend .text-shadow;
        font-family: 'Gabriola';
        cursor:pointer;
    }
    .global-style-arabic{
        @extend .text-shadow;
        font-family: 'Al Bayan';
        cursor:pointer;
    }
</style>