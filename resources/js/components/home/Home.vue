<template>
    <div class="justify-content-center mb-4 mt-5 row">
        <div class="col-md-12 text-center">
            <img :src="'../../../images/logo/logo_colors/'+selectedLogo+'.png'" class="img-fluid cursor-pointer" alt="Logo AB.IT" @mouseenter="onMouseEnterTheLogo" @mouseleave="onMouseLeaveTheLogo" @click="changeColorOrder"> 
        </div>
        <div class="align-items-center col-md-8 d-flex mb-4 mt-5 px-4 text-center" style="height:150px;" >
            <transition name="fade" mode="out-in" appear>
                <em 
                :key="quote.id" 
                class="text-black-50 cursor-pointer" 
                v-for="(quote,index) in quotes" 
                v-if="indexQuote === quote.id" 
                @click="onQuoteClicked"
                @mouseenter="onQuoteMouseEnter"
                @mouseleave="onQuoteMouseLeave"
                >{{quote.content}}</em>
            </transition>
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
            quotes:[
                {
                    id: 1,
                    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula leo. Fusce quis sagittis odio. Ut ut quam pharetra, euismod turpis in, dictum augue.'
                },
                {
                    id: 2,
                    content:'Aenean vestibulum urna dolor, vulputate lacinia justo volutpat vel. Aliquam nec magna quam. Curabitur ultricies ex mollis condimentum eleifend.'
                },
                {
                    id: 3,
                    content:'Aenean ut velit aliquam, rhoncus enim at, lobortis dui. Etiam id mauris aliquam, blandit nisl vitae, faucibus nisi. Nullam consectetur dui sit amet nibh blandit dignissim. In sit amet egestas nisi.'
                },
                {
                    id: 4,
                    content:'Pellentesque efficitur ipsum vitae leo pulvinar, vitae facilisis magna venenatis. Maecenas non est et orci sodales semper at eu mi. Vivamus lacinia risus tincidunt vehicula vehicula. Etiam porta scelerisque leo ac porttitor. Sed vestibulum tempor ipsum. Cras euismod diam mi, volutpat facilisis sem sodales non.'
                },
                {
                    id: 5,
                    content:'Nullam aliquet luctus sollicitudin. Proin in lorem eu dolor luctus pretium. Curabitur dignissim erat volutpat, eleifend metus quis, consectetur ante.'
                },
                {
                    id: 6,
                    content:'In sit amet egestas nisi. Pellentesque efficitur ipsum vitae leo pulvinar, vitae facilisis magna venenatis. Maecenas non est et orci sodales semper at eu mi. Vivamus lacinia risus tincidunt vehicula vehicula.'
                },
                {
                    id: 7,
                    content:'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam arcu ante, rhoncus aliquet urna sed, porta ornare quam. Suspendisse nec tincidunt turpis. Nullam nec sem quis augue finibus facilisis vitae vel erat. Suspendisse varius malesuada tincidunt.'
                },
                {
                    id: 8,
                    content:'Nam in nisl nisl. Morbi id enim gravida, lacinia sem at, suscipit libero. Nulla ut elit eu dui posuere iaculis sed ac felis. Mauris vitae tellus diam.'
                },
                {
                    id: 9,
                    content:'Blandit lorem vitae risus malesuada eleifend. Donec vel vulputate sapien, vel vestibulum risus. Fusce ornare nisl et fringilla cursus. In eu dictum mauris, nec molestie lectus. Praesent vitae turpis ante.'
                }
            ],
            wichOrder:'black_color',
            selectedLogo:'logo_black_red',
            showQuote:true,
            indexImages:1,
            indexQuote:1    ,
            intervalRefLogo:null,
            intervalRefQuote:null
        }
    },
    methods:{
        onMouseEnterTheLogo(){
            this.logoInterval(500);
        },
        onMouseLeaveTheLogo(){
            this.logoInterval(3000);
        },
        onQuoteMouseEnter(){
            this.quoteInterval(6000);
        },
        onQuoteMouseLeave(){
            this.quoteInterval(12000);
        },
        changeColorOrder(){
            this.images = this.wichOrder === 'black_color' ? this.colorBlack : this.blackColor;
            this.wichOrder = this.wichOrder === 'black_color' ? 'color_black' : 'black_color';
        },
        onQuoteClicked(){
            this.indexQuote < this.quotes.length ? this.indexQuote++ : this.indexQuote = 1;
            this.quoteInterval(6000);
        },
        quoteInterval(time){
            if(this.intervalRefQuote){
                clearInterval(this.intervalRefQuote);
            }
            this.intervalRefQuote = setInterval(()=>{
                this.indexQuote < this.quotes.length ? this.indexQuote++ : this.indexQuote = 1;
            },time);
        },
        logoInterval(time){
            if(this.intervalRefLogo){
                clearInterval(this.intervalRefLogo);
            }
            this.intervalRefLogo = setInterval(()=>{
                this.selectedLogo = this.images[this.indexImages % this.images.length];
                this.indexImages ++;
            },time);
        }
    },
    created(){
        this.logoInterval(3000);
        this.quoteInterval(12000);
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
.fade-enter{
    opacity:0;
}
.fade-leave-to{
    opacity:0;
}
.fade-enter-active{
    transition: opacity 3s;
}
.fade-leave-active{
    transition: opacity 3s;
}
</style>