<template>
    <div class="justify-content-center mb-4 mt-5 row">
        <div class="col-md-12 text-center">
            <img :src="'../../../images/logo/logo_colors/'+selectedLogo+'.png'" class="img-fluid cursor-pointer" alt="Logo AB.IT" @mouseenter="mouseEnterTheLogo" @mouseleave="mouseLeaveTheLogo" @click="changeColorOrder"> 
        </div>
        <div class="col-md-8 my-4 px-4 text-center">
            <em class="text-black-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula leo. Fusce quis sagittis odio. Ut ut quam pharetra, euismod turpis in, dictum augue. </em>
        </div>
        <div class="col-md-12 d-flex justify-content-center">
            <router-link 
                tag="div" 
                :to="{ name : 'services' }" 
                class="text-center router-link-style p-3"
            >
                Découvrez nos services
            </router-link>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            blackColor:[
                'logo_black_red',
                'logo_black_gold',
                'logo_black_green',
                'logo_black_blue',
                'logo_black_purple'
            ],
            colorBlack:[
                'logo_red_black',
                'logo_gold_black',
                'logo_green_black',
                'logo_blue_black',
                'logo_purple_black'
            ],
            images:[
                'logo_black_red',
                'logo_black_gold',
                'logo_black_green',
                'logo_black_blue',
                'logo_black_purple'
            ],
            wichOrder:'black_color',
            selectedLogo:'logo_black_red',
            index:1,
            intervalRef:null
        }
    },
    methods:{
        mouseEnterTheLogo(){
            clearInterval(this.intervalRef);
            this.intervalRef = setInterval(()=>{
                this.selectedLogo = this.images[this.index % this.images.length];
                this.index ++;
            },500);
        },
        mouseLeaveTheLogo(){
            clearInterval(this.intervalRef);
            this.intervalRef = setInterval(()=>{
                this.selectedLogo = this.images[this.index % this.images.length];
                this.index ++;
            },3000);
        },
        changeColorOrder(){
            this.images = this.wichOrder === 'black_color' ? this.colorBlack : this.blackColor;
            this.wichOrder = this.wichOrder === 'black_color' ? 'color_black' : 'black_color';
        }
    },
    created(){
        this.intervalRef = setInterval(()=>{
            this.selectedLogo = this.images[this.index % this.images.length];
            this.index ++;
        },3000);
    }
}
</script>

<style scoped>
.router-link-style{
    transition: all 1s;
    font-weight: 500;
    width:fit-content;
    border: 2px solid rgba(0,0,0,0);
    cursor:pointer;
}
.router-link-style:hover{
    transition: all 500ms;
    background: #e3342f;
    color: white;
    border: 2px solid rgba(0,0,0,1);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); 
}
.cursor-pointer{
    cursor:pointer;
}
</style>