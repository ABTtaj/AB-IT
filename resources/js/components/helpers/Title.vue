<template>
    <div @click="switchInv">
        <template v-if="selectedLangage ==='fr'">
            <template v-if="category ==='agence'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'text-dark':!isInverse}">Qui <span :class="{'text-danger':!isInverse,'text-dark':isInverse}">Sommes-</span>Nous <span :class="{'text-danger':!isInverse,'text-dark':isInverse}">?</span></span>
                </span>
            </template>
            <template v-if="category ==='services'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':!isInverse,'text-dark':isInverse}">Nos </span><span :class="{'text-danger':isInverse,'text-dark':!isInverse}">Services</span>
                </span>
            </template>
            <template v-if="category ==='website'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'text-dark':!isInverse}">Création de </span><span :class="{'text-danger':!isInverse,'text-dark':isInverse}">Site </span><span :class="{'text-danger':isInverse,'text-dark':!isInverse}">Web</span>
                </span>
            </template>
            <template v-if="category ==='e-commerce'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':!isInverse,'text-dark':isInverse}">Solutions </span><span :class="{'text-danger':isInverse,'text-dark':!isInverse}">E-Commerce</span>            
                </span>
            </template>
            <template v-if="category ==='marketing-digital'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'text-dark':!isInverse}">Marketing </span><span :class="{'text-danger':!isInverse,'text-dark':isInverse}">Digital</span>            
                </span>
            </template>
            <template v-if="category ==='seo'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'text-dark':!isInverse}">Référencement </span><span :class="{'text-danger':!isInverse,'text-dark':isInverse}">Naturel</span>            
                </span>
            </template>
            <template v-if="category ==='trainings'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':!isInverse,'text-dark':isInverse}">Formations & </span><span :class="{'text-danger':isInverse,'text-dark':!isInverse}">Conseils</span>            
                </span>
            </template>
            <template v-if="category ==='contact'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'text-dark':!isInverse}">Contactez-</span><span :class="{'text-danger':!isInverse,'text-dark':isInverse}">Nous</span><span :class="{'text-danger':isInverse,'text-dark':!isInverse}"> !</span>
                </span>
            </template>
        </template>
        <template v-if="selectedLangage ==='en'">
            <template v-if="category ==='agence'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'text-dark':!isInverse}">The </span><span :class="{'text-danger':!isInverse,'text-dark':isInverse}">Agency</span>
                </span>
            </template>
            <template v-if="category ==='services'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':!isInverse,'text-dark':isInverse}">Our </span><span :class="{'text-danger':isInverse,'text-dark':!isInverse}">Services</span>
                </span>
            </template>
            <template v-if="category ==='website'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':!isInverse,'text-dark':isInverse}">Web </span><span :class="{'text-danger':isInverse,'text-dark':!isInverse}">Development</span>
                </span>
            </template>
            <template v-if="category ==='e-commerce'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':!isInverse,'text-dark':isInverse}">E-Commerce </span><span :class="{'text-danger':isInverse,'text-dark':!isInverse}">Solutions</span>        
                </span>
            </template>
            <template v-if="category ==='marketing-digital'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'text-dark':!isInverse}">Digital </span><span :class="{'text-danger':!isInverse,'text-dark':isInverse}">Marketing</span>            
                </span>
            </template>
            <template v-if="category ==='seo'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'text-dark':!isInverse}">Search </span><span :class="{'text-danger':!isInverse,'text-dark':isInverse}">Engine</span><span :class="{'text-danger':isInverse,'text-dark':!isInverse}"> Optimization</span>           
                </span>
            </template>
            <template v-if="category ==='trainings'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':!isInverse,'text-dark':isInverse}">Trainings & </span><span :class="{'text-danger':isInverse,'text-dark':!isInverse}">Advices</span>            
                </span>
            </template>
            <template v-if="category ==='contact'">
                <span class="global-style font-size-titles">
                    <span :class="{'text-danger':isInverse,'text-dark':!isInverse}">Contact</span><span :class="{'text-danger':!isInverse,'text-dark':isInverse}"> Us</span><span :class="{'text-danger':isInverse,'text-dark':!isInverse}"> !</span>
                </span>
            </template>
        </template>
        <template v-if="selectedLangage ==='ma'">
            <template v-if="category ==='agence'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'text-danger':isInverse,'text-dark':!isInverse}">شكون </span><span :class="{'text-danger':!isInverse,'text-dark':isInverse}">حنا </span><span :class="{'text-danger':isInverse,'text-dark':!isInverse}">؟</span>
                </span>
            </template>
            <template v-if="category ==='services'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'text-danger':!isInverse,'text-dark':isInverse}">خـدمــا</span><span :class="{'text-danger':isInverse,'text-dark':!isInverse}">تـنــا</span>
                </span>
            </template>
            <template v-if="category ==='website'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'text-danger':!isInverse,'text-dark':isInverse}">تطوير مواقع</span><span :class="{'text-danger':isInverse,'text-dark':!isInverse}"> الإنترنت</span>
                </span>
            </template>
            <template v-if="category ==='e-commerce'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'text-danger':isInverse,'text-dark':!isInverse}">حلولنا للـ </span><span :class="{'text-danger':!isInverse,'text-dark':isInverse}" class="global-style">E-Commerce</span>      
                </span>
            </template>
            <template v-if="category ==='marketing-digital'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'text-danger':isInverse,'text-dark':!isInverse}">التسويق </span><span :class="{'text-danger':!isInverse,'text-dark':isInverse}">الرقمي</span>            
                </span>
            </template>
            <template v-if="category ==='seo'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'text-danger':isInverse,'text-dark':!isInverse}">تحسين </span><span :class="{'text-danger':!isInverse,'text-dark':isInverse}">محركات </span><span :class="{'text-danger':isInverse,'text-dark':!isInverse}">البحث</span>           
                </span>
            </template>
            <template v-if="category ==='trainings'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'text-danger':!isInverse,'text-dark':isInverse}">دورات تعليمية </span><span :class="{'text-danger':isInverse,'text-dark':!isInverse}">و نصائح</span>            
                </span>
            </template>
            <template v-if="category ==='contact'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'text-danger':isInverse,'text-dark':!isInverse}">اتّصلوا </span><span :class="{'text-danger':!isInverse,'text-dark':isInverse}">بنا </span><span :class="{'text-danger':isInverse,'text-dark':!isInverse}">!</span>
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

<style scoped>
    .global-style{
        font-family: 'Gabriola';
        text-shadow: 1px 2px 3px rgba(0,0,0,0.5);
        cursor:pointer;
    }
    .global-style-arabic{
        text-shadow: 1px 2px 3px rgba(0,0,0,0.5);
        font-family: 'Al Bayan';
        cursor:pointer;
    }
    </style>