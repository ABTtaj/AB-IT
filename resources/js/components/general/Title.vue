<template>
    <img 
        class="cursor-pointer img-fluid" 
        :src="'../../../images/titles/'+selectedLangage.value+'/'+category+isInverse+'.png'" 
        :alt="category+'_title'" 
        @click="switchInv"
    >
</template>

<script>
import { mapGetters } from 'vuex';
export default{
    props:[
        'category'
    ],
    data(){
        return {
            isInverse:''
        }
    },
    computed:{
        ...mapGetters([
            'selectedLangage'
        ])
    },
    methods:{
        switchInv(){
            this.isInverse = this.isInverse ? '' : '_inv';
        }
    }
}
</script>

<style scoped>
</style>