<template>
    <div 
        id="upper-header-container" 
        class="upper-header-container" 
        :class="{
            'app-bg-black app-text-white':darkMode
        }"
    >
        <div 
            class="header-container"
            :class="{
                'gabriola f-24':!isArabic,
                'al-bayan f-26':isArabic
            }" 
            id="header"
            ref="container"
        >
            <div 
                class="links-container" 
                key="links-container"
            >
                <router-link
                    :to="{ 
                        name : 'home'
                    }"
                    class="logo-container"
                    tag="div"
                >
                    <img 
                        v-if="!darkMode"
                        src="../../../images/logo/logo_171x69.png" 
                        :alt="translate('ALT_HEADER_LOGO')"
                        class="img-fluid"
                    >
                    <img 
                        v-else
                        src="../../../images/logo/logo_171x69_dark_mode.png" 
                        :alt="translate('ALT_HEADER_LOGO')"
                        class="img-fluid"
                    >
                </router-link>
                <div 
                    id="primary-links"
                    class="links-list"
                    tag="div" 
                    name="slide"
                    v-if="!isMdOrLess"   
                >
                    <div 
                        id="services-link"
                        :class="{
                            'links-item':!darkMode,
                            'links-item-dark-mode':darkMode,
                            'links-item-active': showServicesMenu && !darkMode,
                            'links-item-active-dark-mode': showServicesMenu && darkMode
                        }"
                        key="services"
                        @click="onServicesClicked"
                    >
                        <div>
                            {{'MENU_SERVICES' | translate }}
                        </div>
                    </div>
                    <router-link 
                        :class="{
                            'links-item':!darkMode,
                            'links-item-dark-mode':darkMode
                        }"
                        :to="{ name : translate(links.contact.route) }"
                        tag="div"
                        key="contact"
                    >
                        <div>
                            {{links.contact.title | translate}}
                        </div>
                    </router-link>
                    <div 
                        id="selected-langage"
                        :class="{
                            'links-item':!darkMode,
                            'links-item-dark-mode':darkMode
                        }"
                        @click="onOldLangageClicked"
                        :key="selectedLangage"
                    >
                        <div>
                            {{links.langages[selectedLangage]}}
                        </div>
                    </div>
                    <div 
                        id="other-langages"
                    >
                        <div 
                            :class="{
                                'links-item':!darkMode,
                                'links-item-dark-mode':darkMode,
                                'gabriola f-24' : index !== 'ma',
                                'al-bayan f-26': index === 'ma'
                            }"
                            v-for="(value,index) in links.langages"
                            :id="value"
                            :key="value"
                            @click="changeSelectedLangage(index)"
                            v-if="index != selectedLangage"
                        >
                            <div>
                                {{value}}
                            </div>
                        </div>
                    </div>
                </div>
                <div 
                    v-else 
                    id="services-link"
                    class="collapse-icon-container"
                    @click="onServicesClicked"
                >
                    <i class="fa fa-bars"></i>
                </div>
            </div>
            <div 
                class="app-dropdown-container"
                id="services"
            >
                <router-link
                    v-for="link in links.secondaryLinks"
                    :key="link.key"
                    class="app-dropdown-item"
                    tag="div"
                    :to="{ name : translate(link.route) }"
                >
                    {{ link.title | translate }}
                </router-link>
                <template v-if="isMdOrLess">
                    <router-link 
                        class="app-dropdown-item w-100"
                        :to="{ name : translate(links.contact.route) }"
                        tag="div"
                        key="contact"
                    >
                        {{links.contact.title | translate}}
                    </router-link>
                    <div 
                        id="selected-langage"
                        class="app-dropdown-item w-100"
                        @click="onOldLangageClicked"
                        :key="selectedLangage"
                    >
                        {{links.langages[selectedLangage]}}
                    </div>
                    <div 
                        class="app-dropdown-item w-100"
                        :class="{
                            'gabriola f-24' : index !== 'ma',
                            'al-bayan f-26': index === 'ma'
                        }"
                        v-for="(value,index) in links.langages"
                        :key="value"
                        :id="value"
                        @click="changeSelectedLangage(index)"
                        v-if="index != selectedLangage && putLangageMenu"
                    >
                        {{value}}
                    </div>
                </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default{
    data(){
        return {
            links:{
                secondaryLinks : [
                    {
                        key:'website',
                        route:'ROUTE_WEBSITE',
                        title:'MENU_WEBSITE'
                    },
                    {
                        key:'e-commerce',
                        route:'ROUTE_E_COMMERCE',
                        title:'MENU_E_COMMERCE'
                    },
                    {
                        key:'marketing-digital',
                        route:'ROUTE_MARKETING_DIGITAL',
                        title:'MENU_MARKETING_DIGITAL'
                    },
                    {
                        key:'seo',
                        route:'ROUTE_SEO',
                        title:'MENU_SEO_LONG'
                    },
                    {
                        key:'trainings',
                        route:'ROUTE_TRAININGS',
                        title:'MENU_TRAININGS'
                    }
                ],
                contact : {
                    key:'contact',
                    route:'ROUTE_CONTACT',
                    title:'MENU_CONTACT'
                },
                langages : {
                    fr:'Français',
                    en:'English',
                    ma:'مغربي'
                }

            },
            showServicesMenu : false,
            showLangageMenu : false,
            showLinksList : false,
            putLangageMenu :false,
            isMdOrLess:false,
            lastHeaderHight : null
        }
    },
    computed:{
        slideDirection(){
            return this.selectedLangage == 'ma' ? 'left' : 'right';
        }
    },
    watch:{
        showServicesMenu(val){
            if(val){
                this.putHeaderHeight(this.heightWithServiceLinks());
                this.putLangageMenu = this.isMdOrLess;
            }else{
                this.putHeaderHeight(this.heightWithoutServiceLinks());
                this.putLangageMenu = false;
            }
        },
        showLangageMenu(val){
            if(this.isMdOrLess){
                if(val){
                    this.putHeaderHeight(this.heightWithServiceLinks());
                } else {
                    this.putHeaderHeight(this.lastHeaderHight);
                }
            } else {
                if(val){
                    this.putPrimaryLinksPosition('0px');
                } else {
                    this.putPrimaryLinksPosition(this.positionWithoutOtherLangages());
                }
            }
        }
    },
    methods:{
        ...mapActions([
            'changeSelectedLangage',
            'putPaddingTop'
        ]),
        closeServiceMenuWhenClickingOutside(){
            document.addEventListener('click',(event)=>{
                if(!document.getElementById('services-link').contains(event.target) && (!this.isMdOrLess || !document.getElementById('selected-langage').contains(event.target)) ){
                    this.showServicesMenu = false;
                }
            });
        },
        closeLangageMenuWhenClickingOutside(){
            document.addEventListener('click',(event)=>{
                if(!document.getElementById('selected-langage').contains(event.target)){
                    this.showLangageMenu = false;
                }
            });
        },
        putHeaderHeight(height){
            this.lastHeaderHight = height;
            let header = document.getElementById('upper-header-container');
            header.style.height = height;
        },
        putPrimaryLinksPosition(position){
            let linksList = document.getElementById('primary-links');
            this.slideDirection == "right" ? linksList.style.left = "auto" : linksList.style.right = "auto";
            linksList.style[this.slideDirection] = position;
        },
        heightWithServiceLinks(){
            const servicesLinksContainer = document.getElementById('services');
            return (servicesLinksContainer.offsetTop + servicesLinksContainer.offsetHeight) + 'px';
        },
        heightWithoutServiceLinks(){
            const servicesLinksContainer = document.getElementById('services');
            return servicesLinksContainer.offsetTop + 'px';
        },
        positionWithoutOtherLangages(){
            const otherLangages = document.getElementById('other-langages');
            return '-' + otherLangages.offsetWidth + 'px';
        },
        onServicesClicked(){
            this.showServicesMenu = !this.showServicesMenu;
        },
        onOldLangageClicked(){
            this.showLangageMenu = !this.showLangageMenu;
        },
        upperContainerSliderInitialization(delay){
            setTimeout(()=>{
                this.putHeaderHeight(this.heightWithoutServiceLinks());
            },delay);
        },
        langageSliderInitialization(delay){
            setTimeout(()=>{
                this.putPrimaryLinksPosition(this.positionWithoutOtherLangages());
            },delay-100);
        },
        upperContainerInitialization(){
            this.putHeaderHeight('0px');
        },
        manageHeaderInitialization(delay){
            if(!this.isMdOrLess){
                this.langageSliderInitialization(delay);
            }
            this.upperContainerSliderInitialization(delay);
            this.upperContainerInitialization();
        },
        manageServicesMenuClosing(){
            this.closeLangageMenuWhenClickingOutside();
            this.closeServiceMenuWhenClickingOutside();
        },
        initializePaddingTop(delay){
            setTimeout(()=>{
                this.putPaddingTop(this.heightWithoutServiceLinks());
            },delay)
        },
        initializeIsMdOrLess(){
            this.isMdOrLess = this.widthLessThan('lg');
        },
        determineIsMdOrLessWhenResizing(){
            window.addEventListener('resize',()=>{
                this.initializeIsMdOrLess()
            });
        },
        closeMenuesWhenResizing(){
            window.addEventListener('resize',(event)=>{
                this.showLangageMenu = false;
                this.showServicesMenu = false;
            });
        },
        manageLangageMenuWhenResizing(){
            window.addEventListener('resize',()=>{
                if(!this.isMdOrLess){
                    this.putPrimaryLinksPosition(this.positionWithoutOtherLangages());
                }
            });
        }
    },
    mounted(){
        this.initializeIsMdOrLess();
        this.manageServicesMenuClosing();
        this.initializePaddingTop(1000);
        this.manageHeaderInitialization(1000);
        this.determineIsMdOrLessWhenResizing();
        this.closeMenuesWhenResizing();
        this.manageLangageMenuWhenResizing();
    }
}
</script>

<style lang="scss" scoped>

@import '../../../sass/app';

.upper-header-container{
    overflow:hidden;
    transition: height 500ms ease-out, background-color 500ms ease-out;
    @extend .shadow-xxl, .body-bg, .fixed-top;
}
.header-container{
    @extend .py-3, .f-22, .text-shadow-sm;
}
.logo-container{
    @extend .cursor-pointer;
}
.links-container{
    overflow : hidden;
    @extend .align-items-center, .d-flex, .mx-xl-5,.mx-lg-4, .mx-md-3, .mx-2, .justify-content-between, .p-relative;
}
.links-list{
    transition: right  1s ease-out, left  1s ease-out;
    @extend .d-flex, .justify-content-around, .p-absolute;
} 
.links-item-active{
    @extend .justify-content-center, .cursor-pointer, .px-3, .py-2, .border-dark-important-2, .mx-3;
}
.links-item-active-dark-mode{
    @extend .justify-content-center, .cursor-pointer, .px-3, .py-2, .border-white-important-2, .mx-3;
}
.links-item{
    transition : all 500ms;
    width:140px;
    @extend .d-flex, .align-items-center, .justify-content-center, .cursor-pointer, .border-transparent-2, .mx-3, .px-3, .py-2;
    &:hover{
        @extend .border-dark-2, .shadow;
    }
}
.links-item-dark-mode{
    transition : all 500ms;
    width:140px;
    @extend .d-flex, .align-items-center, .justify-content-center, .cursor-pointer, .border-transparent-2, .mx-3, .px-3, .py-2;
    &:hover{
        @extend .border-white-important-2, .shadow;
    }
}
.app-dropdown-container{
    overflow:hidden;
    @extend .align-items-center, .d-flex, .justify-content-around, .mt-3, .body-bg, .inset-top-shadow-xxl, .flex-column; 
}
.app-dropdown-item{
    transition : all 500ms;
    @extend .app-dropdown-item, .text-center,.border-transparent-2, .app-text-dark, .cursor-pointer, .px-3, .py-2, .w-100;
    &:hover{
        @extend .app-bg-dark, .app-text-white, .shadow-xxl;
    }
}
#other-langages{
    @extend .d-flex, .px-2, .mx-n2;
}
.collapse-icon-container{
    @extend .cursor-pointer,.d-flex, .f-36, .mx-2,.p-3;
}
</style>