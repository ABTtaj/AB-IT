<template>
    <img class="cursor-pointer img-fluid":src="'../../../images/titles/'+selectedLangage.value+'/'+category+isInverse+'.png'" :alt="category+'_title'" @click="switchInv">
</template>

<script>
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
        selectedLangage(){
            return window.langage;
        }
    },
    methods:{
        switchInv(){
            this.isInverse = this.isInverse ? '' : '-inv';
        }
    }
}
</script>

<style scoped>
    .cursor-pointer{
        cursor:pointer;
    }
</style>