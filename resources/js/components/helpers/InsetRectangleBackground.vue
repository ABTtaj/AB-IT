<template>
    <div class="service-upper-container">
        <div 
            class="service-container px-3" 
            :class="{
                'service-container':!isArabic,
                'service-container-arabic':isArabic,
                'bg-danger':background == 'danger',
                'bg-success':background == 'success',
                'bg-primary':background == 'primary',
                'bg-dark':background == 'dark',
                'bg-secondary':background == 'secondary',
                'bg-light':background == 'light',
                'bg-warning':background == 'warning',
                'bg-info':background == 'info'
            }" 
            :id="id"
        >   
           <slot></slot>
        </div> 
    </div>
</template>
<script>
export default {
    props:[
        'background',
        'id'
    ]
}
</script>
<style scoped>
.service-upper-container{
    height:100vh;
}
.service-container{
    height: 100%;
    margin-left: calc(-50vw + 50%);
    width: 100vw;
    box-shadow: inset 0 25px 25px -20px rgba(0,0,0,0.8), inset 0 -25px 30px -25px rgba(0,0,0,0.8);
}
.service-container-arabic{
    height: 100%;
    margin-right: calc(-50vw + 50%);
    width: 100vw;
    box-shadow: inset 0 25px 25px -20px rgba(0,0,0,0.8), inset 0 -25px 30px -25px rgba(0,0,0,0.8);
}
</style>