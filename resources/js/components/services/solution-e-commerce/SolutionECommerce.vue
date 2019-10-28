<template>
    <div class="row justify-content-center ">
        <div class="col-12 text-center">
            <app-title category="e-commerce"></app-title>
        </div>
        <div class="col-md-4 h-fit-content">
            <inset-rectangle-background 
                background="danger" 
                class="h-100 mt-5"
            >
                <div class="row justify-content-around align-items-center p-md-5 py-4 px-2">
                    <div class="col-lg-5 col-xl-6">
                        <scroll-transition-manager 
                            :show="transitions['first-image']" 
                            animation-class="animated fadeInUp slow"
                        >
                            <img 
                                src="../../../../images/general_images/e_commerce.png" 
                                :alt="translate('ALT_E_COMMERCE_PRIMARY')" 
                                class="img-fluid"
                                id="first-image"
                            >
                        </scroll-transition-manager>
                    </div>
                    <div 
                        class="col-lg-7 col-xl-6 text-justify app-text-white text-shadow-sm f-20" 
                        :class="{
                            'gabriola':!isArabic,
                            'al-bayan':isArabic
                        }"
                    >
                        <scroll-transition-manager 
                            :show="transitions['first-text']" 
                            animation-class="animated fadeInUp slow"
                        >
                            <div 
                                class="line-height-xxl"
                                id="first-text"
                            >
                            {{ 'E_COMMERCE_IMAGE_TEXT' | translate }}
                            </div> 
                        </scroll-transition-manager>               
                    </div>
                </div>
            </inset-rectangle-background>
        </div>
        <div class="col-12">
            <scroll-transition-manager 
                :show="transitions['second-title']" 
                animation-class="animated fadeInUp slow"
            >
                <div 
                    class="text-shadow-sm text-center app-text-danger my-5 f-46" 
                    :class="{
                        'gabriola':!isArabic,
                        'al-bayan':isArabic
                    }"
                    id="second-title"
                >
                    
                    {{ 'E_COMMERCE_SECOND_TITLE' | translate }}
                </div> 
            </scroll-transition-manager>
            <scroll-transition-manager 
                :show="transitions['second-text']" 
                animation-class="animated fadeInUp slow"
            >
                <div 
                    class="my-5 f-20 text-shadow-sm text-center line-height-xl"
                    :class="{
                        'gabriola':!isArabic,
                        'al-bayan':isArabic
                    }"
                    id="second-text"
                >
                    
                    {{ 'E_COMMERCE_SECOND_TEXT' | translate }}
                </div>  
            </scroll-transition-manager>               
        </div>
        <div class="col-12">
            <inset-rectangle-background 
                background="danger" 
                class="h-100"
            >
                <div class="row justify-content-center">
                    <div 
                        class="col-xl-4 col-lg-7 p-5" 
                        v-for="packData in packsData" 
                        :key="packData.title"
                    >   
                        <scroll-transition-manager 
                            :show="transitions[packData.id]" 
                            animation-class="animated fadeInUp slow" 
                            :full-height="true"
                        >
                            <pack-summary 
                                :data="packData" 
                                :id="packData.id"
                            >
                            </pack-summary> 
                        </scroll-transition-manager>                     
                    </div>
                </div>
            </inset-rectangle-background>
        </div>
        <div class="col-12">
            <scroll-transition-manager 
                :show="transitions['third-text']" 
                animation-class="animated fadeInUp slow"
            >
                <div 
                    class="my-5 f-20 text-shadow-sm text-center line-height-xl" 
                    :class="{
                        'gabriola':!isArabic,
                        'al-bayan':isArabic
                    }"
                    id="third-text"
                >
                    {{ 'E_COMMERCE_THIRD_TEXT' | translate }}
                </div> 
            </scroll-transition-manager>            
        </div>
    </div>
</template>

<script>
import AppTitle from '../../helpers/Title.vue';
import inViewport from 'in-viewport';
import InsetRectangleBackground from '../../helpers/InsetRectangleBackground.vue';
import ScrollTransitionManager from '../../helpers/ScrollTransitionManager.vue';
import PackSummary from '../pack/PackSummary.vue';
export default{
    components:{
        AppTitle,
        PackSummary,
        InsetRectangleBackground,
        ScrollTransitionManager
    },
    data(){
        return {
            packsData:[
                {
                    id:"first-pack",
                    title:"FIRST_E_COMMERCE_PACK_TITLE",
                    cost:"3000",
                    hasDefinedCost:true,
                    properties:[
                        'FIRST_E_COMMERCE_PACK_FIRST_PREPERTY',
                        'FIRST_E_COMMERCE_PACK_SECOND_PREPERTY',
                        'FIRST_E_COMMERCE_PACK_THIRD_PREPERTY',
                        'FIRST_E_COMMERCE_PACK_FOURTH_PREPERTY',
                        'FIRST_E_COMMERCE_PACK_FIFTH_PREPERTY',
                        'FIRST_E_COMMERCE_PACK_SIXTH_PREPERTY',
                        'FIRST_E_COMMERCE_PACK_SEVENTH_PREPERTY',
                        'FIRST_E_COMMERCE_PACK_EIGHTH_PREPERTY'
                    ],
                    route:"ROUTE_E_COMMERCE_FIRST_PACK"
                },
                {
                    id:"second-pack",
                    title:"SECOND_E_COMMERCE_PACK_TITLE",
                    cost:"5000",
                    hasDefinedCost:true,
                    properties:[
                        'SECOND_E_COMMERCE_PACK_FIRST_PREPERTY',
                        'SECOND_E_COMMERCE_PACK_SECOND_PREPERTY',
                        'SECOND_E_COMMERCE_PACK_THIRD_PREPERTY',
                        'SECOND_E_COMMERCE_PACK_FOURTH_PREPERTY',
                        'SECOND_E_COMMERCE_PACK_FIFTH_PREPERTY',
                        'SECOND_E_COMMERCE_PACK_SIXTH_PREPERTY',
                        'SECOND_E_COMMERCE_PACK_SEVENTH_PREPERTY',
                        'SECOND_E_COMMERCE_PACK_EIGHTH_PREPERTY'
                    ],
                    route:"ROUTE_E_COMMERCE_SECOND_PACK"
                },
                {
                    id:"third-pack",
                    title:"THIRD_E_COMMERCE_PACK_TITLE",
                    cost:null,
                    hasDefinedCost:null,
                    properties:[
                        'THIRD_E_COMMERCE_PACK_FIRST_PREPERTY',
                        'THIRD_E_COMMERCE_PACK_SECOND_PREPERTY',
                        'THIRD_E_COMMERCE_PACK_THIRD_PREPERTY',
                        'THIRD_E_COMMERCE_PACK_FOURTH_PREPERTY',
                        'THIRD_E_COMMERCE_PACK_FIFTH_PREPERTY',
                        'THIRD_E_COMMERCE_PACK_SIXTH_PREPERTY',
                        'THIRD_E_COMMERCE_PACK_SEVENTH_PREPERTY',
                        'THIRD_E_COMMERCE_PACK_EIGHTH_PREPERTY'
                    ],
                    route:"ROUTE_E_COMMERCE_THIRD_PACK"
                }
            ],
            transitions:{
                'first-image':true,
                'first-text':true,
                'second-title':true,
                'second-text':true,
                'third-text':true,
                'first-pack':true,
                'second-pack':true,
                'third-pack':true,
            }
        }
    },
    methods:{
        inViewportById(id){
            const element = document.getElementById(id);
            return inViewport(element);
        },
        managetransitions(){
                for(let id in this.transitions){
                    if(!this.inViewportById(id)){
                        this.transitions[id]=false;
                    }
                }
        }
    },
    mounted(){
        setTimeout(()=>{
            this.managetransitions();
        },1000);
    }
}
</script>

<style scoped>
</style>