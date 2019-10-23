<template>
    <div @click="switchInv">
        <template v-if="selectedLangage ==='fr'">
            <template v-if="category ==='agence'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':isInverse,'black':!isInverse}">Qui <span :class="{'red':!isInverse,'black':isInverse}">Sommes-</span>Nous <span :class="{'red':!isInverse,'black':isInverse}">?</span></span>
                </span>
            </template>
            <template v-if="category ==='services'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':!isInverse,'black':isInverse}">Nos </span><span :class="{'red':isInverse,'black':!isInverse}">Services</span>
                </span>
            </template>
            <template v-if="category ==='website'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':isInverse,'black':!isInverse}">Création de </span><span :class="{'red':!isInverse,'black':isInverse}">Site </span><span :class="{'red':isInverse,'black':!isInverse}">Web</span>
                </span>
            </template>
            <template v-if="category ==='e-commerce'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':!isInverse,'black':isInverse}">Solutions </span><span :class="{'red':isInverse,'black':!isInverse}">E-Commerce</span>            
                </span>
            </template>
            <template v-if="category ==='marketing-digital'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':isInverse,'black':!isInverse}">Marketing </span><span :class="{'red':!isInverse,'black':isInverse}">Digital</span>            
                </span>
            </template>
            <template v-if="category ==='marketing-automation'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':!isInverse,'black':isInverse}">Marketing </span><span :class="{'red':isInverse,'black':!isInverse}">Automation</span>            
                </span>
            </template>
            <template v-if="category ==='seo'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':isInverse,'black':!isInverse}">Référencement </span><span :class="{'red':!isInverse,'black':isInverse}">Naturel</span>            
                </span>
            </template>
            <template v-if="category ==='trainings'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':!isInverse,'black':isInverse}">Formations & </span><span :class="{'red':isInverse,'black':!isInverse}">Conseils</span>            
                </span>
            </template>
            <template v-if="category ==='contact'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':isInverse,'black':!isInverse}">Contactez-</span><span :class="{'red':!isInverse,'black':isInverse}">Nous</span><span :class="{'red':isInverse,'black':!isInverse}"> !</span>
                </span>
            </template>
        </template>
        <template v-if="selectedLangage ==='en'">
            <template v-if="category ==='agence'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':isInverse,'black':!isInverse}">The </span><span :class="{'red':!isInverse,'black':isInverse}">Agency</span>
                </span>
            </template>
            <template v-if="category ==='services'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':!isInverse,'black':isInverse}">Our </span><span :class="{'red':isInverse,'black':!isInverse}">Services</span>
                </span>
            </template>
            <template v-if="category ==='website'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':!isInverse,'black':isInverse}">Web </span><span :class="{'red':isInverse,'black':!isInverse}">Development</span>
                </span>
            </template>
            <template v-if="category ==='e-commerce'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':!isInverse,'black':isInverse}">E-Commerce </span><span :class="{'red':isInverse,'black':!isInverse}">Solutions</span>        
                </span>
            </template>
            <template v-if="category ==='marketing-digital'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':isInverse,'black':!isInverse}">Digital </span><span :class="{'red':!isInverse,'black':isInverse}">Marketing</span>            
                </span>
            </template>
            <template v-if="category ==='marketing-automation'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':!isInverse,'black':isInverse}">Marketing </span><span :class="{'red':isInverse,'black':!isInverse}">Automation</span>            
                </span>
            </template>
            <template v-if="category ==='seo'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':isInverse,'black':!isInverse}">Search </span><span :class="{'red':!isInverse,'black':isInverse}">Engine</span><span :class="{'red':isInverse,'black':!isInverse}"> Optimization</span>           
                </span>
            </template>
            <template v-if="category ==='trainings'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':!isInverse,'black':isInverse}">Trainings & </span><span :class="{'red':isInverse,'black':!isInverse}">Advices</span>            
                </span>
            </template>
            <template v-if="category ==='contact'">
                <span class="global-style font-size-titles">
                    <span :class="{'red':isInverse,'black':!isInverse}">Contact</span><span :class="{'red':!isInverse,'black':isInverse}"> Us</span><span :class="{'red':isInverse,'black':!isInverse}"> !</span>
                </span>
            </template>
        </template>
        <template v-if="selectedLangage ==='ma'">
            <template v-if="category ==='agence'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'red':isInverse,'black':!isInverse}">شكون </span><span :class="{'red':!isInverse,'black':isInverse}">حنا </span><span :class="{'red':isInverse,'black':!isInverse}">؟</span>
                </span>
            </template>
            <template v-if="category ==='services'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'red':!isInverse,'black':isInverse}">خـدمــا</span><span :class="{'red':isInverse,'black':!isInverse}">تـنــا</span>
                </span>
            </template>
            <template v-if="category ==='website'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'red':!isInverse,'black':isInverse}">تطوير مواقع</span><span :class="{'red':isInverse,'black':!isInverse}"> الإنترنت</span>
                </span>
            </template>
            <template v-if="category ==='e-commerce'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'red':isInverse,'black':!isInverse}">حلولنا للـ </span><span :class="{'red':!isInverse,'black':isInverse}" class="global-style">E-Commerce</span>      
                </span>
            </template>
            <template v-if="category ==='marketing-digital'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'red':isInverse,'black':!isInverse}">التسويق </span><span :class="{'red':!isInverse,'black':isInverse}">الرقمي</span>            
                </span>
            </template>
            <template v-if="category ==='marketing-automation'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'red':isInverse,'black':!isInverse}">إدارة </span><span :class="{'red':!isInverse,'black':isInverse}">تسويق </span><span :class="{'red':isInverse,'black':!isInverse}">المشروعات</span>             
                </span>
            </template>
            <template v-if="category ==='seo'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'red':isInverse,'black':!isInverse}">تحسين </span><span :class="{'red':!isInverse,'black':isInverse}">محركات </span><span :class="{'red':isInverse,'black':!isInverse}">البحث</span>           
                </span>
            </template>
            <template v-if="category ==='trainings'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'red':!isInverse,'black':isInverse}">دورات تعليمية </span><span :class="{'red':isInverse,'black':!isInverse}">و نصائح</span>            
                </span>
            </template>
            <template v-if="category ==='contact'">
                <span class="global-style-arabic font-size-titles">
                    <span :class="{'red':isInverse,'black':!isInverse}">اتّصلوا </span><span :class="{'red':!isInverse,'black':isInverse}">بنا </span><span :class="{'red':isInverse,'black':!isInverse}">!</span>
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
    .black{
        color:#343a40;
    }
    .red{
        color:#e3342f;
    }
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