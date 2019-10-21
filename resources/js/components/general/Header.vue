<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent d-flex align-items-center p-0 mt-2">
        <router-link tag="a" :to="{name:'home'}" class="navbar-brand"><img src="../../../images/logo/logo_171x69.png" alt="AB.IT Logo"></router-link>
        <button 
            id="toggle-menu-button"
            class="navbar-toggler border-0 mt-n4" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            :aria-expanded="showCollapseNavBar" 
            aria-label="Toggle navigation"
            @click="toggleCollapseNavBar"
        >
            <i class="fa fa-bars bar-toggle"></i>
        </button>
        <div 
            class="collapse navbar-collapse" 
            :class="{
                'show shadow bg-white-95 black-border':showCollapseNavBar,
                'mt-n4':!showCollapseNavBar
            }" 
            id="navbarSupportedContent"
            v-if="device==='pc'"
        >
            <ul class="navbar-nav mr-auto">
            </ul>
            <ul class="navbar-nav">
                <li 
                    class="nav-item"
                    @click="closeCollapseMenu"
                >
                    <router-link
                        tag="a"
                        :to="{name:'agence'}" 
                        class="nav-link p-3 custom-nav-link text-shadow transparent-border red-background-item" 
                        :class="{
                            'black-border-hover':!showCollapseNavBar,
                            'border-bottom-collapse-hover':showCollapseNavBar,
                            'arabic-button-font':isArabic
                            }" 
                        @mouseenter="closeDropdowns"
                    >
                    {{'MENU_AGENCE' | translate}}
                    </router-link>
                </li>
                <li 
                    v-if="!showCollapseNavBar"
                    class="nav-item dropdown" 
                    :class="{'show ':showNosServicesDropDown}"
                    @mouseleave="nosServicesDropDownMouseLeave"
                    @mouseenter="nosServicesDropDownMouseEnter"
                    @click="onServicesClicked"
                >
                    <router-link
                        tag="a"
                        :to="{ name : 'services' }" 
                        class="nav-link p-3 text-shadow transparent-border dropdown-toggle" 
                        :class="{
                            'red-background-dropdown shadow': (showNosServicesDropDown || mouseStillOnServices),
                            'dropdown-transition custom-nav-link' : !(showNosServicesDropDown || mouseStillOnServices),
                            'border-top-collapse border-right-collapse border-left-collapse':(!showCollapseNavBar && showNosServicesDropDown),
                            'black-border':(!showCollapseNavBar && mouseStillOnServices),
                            'arabic-button-font':isArabic
                        }"
                        id="nosServicesDropDown" 
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        :aria-expanded="showNosServicesDropDown"
                    >
                        {{'MENU_SERVICES' | translate}}
                    </router-link>
                    <transition name="deroule-service-dropdown" appear>
                        <div 
                            class="little-negative-margin-top overflow-hidden dropdown-menu custom-dropdown-menu rounded-0 p-0 bg-white-95 m-0" 
                            :class="{
                                'show shadow':showNosServicesDropDown,
                                'border-bottom-collapse':showCollapseNavBar,
                                'black-border ':!showCollapseNavBar
                            }" 
                            aria-labelledby="nosServicesDropDown"
                            v-if="showNosServicesDropDown"
                        >
                            <router-link
                                tag="a"
                                class="dropdown-item red-background-item text-center py-3 custom-nav-link text-shadow" 
                                :class="{'arabic-button-font':isArabic}"
                                v-for="service in nosServices"
                                :key="service.title"
                                :to="{ name : service.routeName }"
                                v-html="translate(service.title)"
                            >
                            </router-link>
                        </div>
                    </transition>
                </li>
                <li 
                    class="nav-item"
                    @click="closeCollapseMenu"
                >
                    <router-link 
                        tag="a"
                        :to="{ name : 'contact' }" 
                        class="nav-link p-3 custom-nav-link text-shadow transparent-border red-background-item" 
                        :class="{
                            'black-border-hover':!showCollapseNavBar,
                            'border-top-collapse-hover border-bottom-collapse-hover':showCollapseNavBar,
                            'arabic-button-font':isArabic
                            }" 
                        @mouseenter="closeDropdowns"
                    >
                    {{'MENU_CONTACT' | translate}}
                    </router-link>
                </li>
                <li 
                    class="nav-item dropdown"
                    :class="{'show':showLangagesDropDown}"
                    @mouseleave="langageDropDownMouseLeave"
                >
                    <a 
                        v-for="langage in langages"
                        v-if="langage.value === selectedLangage"
                        class="nav-link p-3 text-shadow transparent-border dropdown-toggle cursor-pointer" 
                        :class="{
                            'red-background-dropdown shadow':showLangagesDropDown,
                            'dropdown-transition custom-nav-link' : !showLangagesDropDown,
                            'black-border': (!showCollapseNavBar && showLangagesDropDown),
                            'border-top-collapse':(showCollapseNavBar && showLangagesDropDown),
                            'arabic-button-font':isArabic
                            }"
                        id="langagesDropDown" 
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true"
                        :aria-expanded="showLangagesDropDown"
                        @mouseenter="langageDropDownMouseEnter"
                        @click="toggleLangagesDropDownResponsive"
                    >
                        {{langage.name}}
                    </a>
                    <transition name="deroule-langage-dropdown" appear>
                        <div 
                            class="little-negative-margin-top overflow-hidden dropdown-menu custom-dropdown-menu rounded-0 p-0 bg-white-95 m-0" 
                            :class="{
                                'show shadow':showLangagesDropDown,
                                'border-top-collapse':showCollapseNavBar,
                                'black-border':!showCollapseNavBar
                                }" 
                            aria-labelledby="langagesDropDown"
                            v-if="showLangagesDropDown"
                        >
                            <template
                                v-for="langage in langages"
                            >
                                <a 
                                    class="cursor-pointer dropdown-item red-background-item text-center py-3 px-5 custom-nav-link text-shadow"
                                    :class="{
                                        'arabic-button-font':langage.value === 'ma'
                                    }" 
                                    :key="langage.value"
                                    v-if="langage.value !== selectedLangage"
                                    @click="selectLangage(langage.value)"
                                >
                                {{langage.name}}
                                </a>
                            </template>
                        </div>
                    </transition>
                </li>
            </ul>
        </div>
        <transition 
            appear
            enter-active-class="animated fadeInDown"
            leave-active-class="animated fadeOutDown"
        >
            <div 
                class="collapse navbar-collapse mobile-custom-menu" 
                :class="{
                    'show shadow bg-white-95 black-border':showCollapseNavBar,
                    'mt-n4':!showCollapseNavBar
                }" 
                id="navbarSupportedContent"
                v-if="showCollapseNavBar && device=='mobile'"
                style="transition: all 1s"
            >
                <ul class="navbar-nav mr-auto">
                </ul>
                <ul class="navbar-nav p-0">
                    <transition-group
                        name="slide"
                    >
                        <li 
                            class="nav-item"
                            @click="closeCollapseMenu"
                            key="agence"
                        >
                            <router-link
                                tag="a"
                                :to="{name:'agence'}" 
                                class="nav-link p-3 custom-nav-link text-shadow transparent-border red-background-item" 
                                :class="{
                                    'black-border-hover':!showCollapseNavBar,
                                    'border-bottom-collapse-hover':showCollapseNavBar,
                                    'arabic-button-font':isArabic
                                    }" 
                                @mouseenter="closeDropdowns"
                            >
                            {{'MENU_AGENCE' | translate}}
                            </router-link>
                        </li>
                        <li 
                            v-if="showCollapseNavBar"
                            class="nav-item dropdown" 
                            :class="{'show ':showNosServicesDropDown}"
                            @mouseleave="nosServicesDropDownMouseLeave"
                            @mouseenter="nosServicesDropDownMouseEnter"
                            key="services"
                        >
                            <a
                                class="cursor-pointer nav-link p-3 text-shadow transparent-border dropdown-toggle" 
                                :class="{
                                    'red-background-dropdown shadow':showNosServicesDropDown,
                                    'custom-nav-link':!showNosServicesDropDown,
                                    'border-top-collapse': (showCollapseNavBar && showNosServicesDropDown),
                                    'arabic-button-font':isArabic
                                }"
                                id="nosServicesDropDown" 
                                role="button" 
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                :aria-expanded="showNosServicesDropDown"
                                @click="toggleNosServicesDropDownResponsive"
                            >
                                {{'MENU_SERVICES' | translate}}
                            </a>
                            <transition 
                                name="deroule-service-dropdown" 
                                appear
                            >
                                <div 
                                    v-if="showNosServicesDropDown"
                                    class="dropdown-menu bg-0 overflow-hidden custom-dropdown-menu rounded-0 p-0 m-0" 
                                    :class="{
                                        'show shadow':showNosServicesDropDown,
                                        'border-bottom-collapse border-top-collapse':showCollapseNavBar,
                                        'black-border ':!showCollapseNavBar
                                    }" 
                                    aria-labelledby="nosServicesDropDown"
                                    @click="closeCollapseMenu"
                                >
                                    <router-link
                                        tag="a"
                                        class="dropdown-item red-background-item text-center py-3 custom-nav-link text-shadow" 
                                        :class="{'arabic-button-font':isArabic}"
                                        v-for="service in nosServices"
                                        :key="service.title"
                                        :to="{ name : service.routeName }"
                                        v-html="translate(service.title)"
                                    >
                                    </router-link>
                                </div>
                            </transition>
                        </li>
                        <li 
                            class="nav-item"
                            @click="closeCollapseMenu"
                            key="contact"
                        >
                            <router-link 
                                tag="a"
                                :to="{ name : 'contact' }" 
                                class="nav-link p-3 custom-nav-link text-shadow transparent-border red-background-item" 
                                :class="{
                                    'black-border-hover':!showCollapseNavBar,
                                    'border-top-collapse-hover border-bottom-collapse-hover':showCollapseNavBar,
                                    'arabic-button-font':isArabic
                                    }" 
                                @mouseenter="closeDropdowns"
                            >
                            {{'MENU_CONTACT' | translate}}
                            </router-link>
                        </li>
                        <li 
                            class="nav-item dropdown"
                            :class="{'show':showLangagesDropDown}"
                            @mouseleave="langageDropDownMouseLeave"
                            key="langage"
                        >
                            <a 
                                v-for="langage in langages"
                                v-if="langage.value === selectedLangage"
                                class="nav-link p-3 text-shadow transparent-border dropdown-toggle cursor-pointer" 
                                :class="{
                                    'red-background-dropdown shadow':showLangagesDropDown,
                                    'custom-nav-link': !showLangagesDropDown,
                                    'border-top-collapse':(showCollapseNavBar && showLangagesDropDown),
                                    'arabic-button-font':isArabic
                                    }"
                                id="langagesDropDown" 
                                role="button" 
                                data-toggle="dropdown" 
                                aria-haspopup="true"
                                :aria-expanded="showLangagesDropDown"
                                @mouseenter="langageDropDownMouseEnter"
                                @click="toggleLangagesDropDownResponsive"
                            >
                                {{langage.name}}
                            </a>
                            <transition name="deroule-langage-dropdown" appear>
                                <div 
                                    class="dropdown-menu bg-0 overflow-hidden custom-dropdown-menu rounded-0 p-0 m-0" 
                                    :class="{
                                        'show shadow':showLangagesDropDown,
                                        'border-top-collapse':showCollapseNavBar,
                                        'black-border':!showCollapseNavBar
                                        }" 
                                    aria-labelledby="langagesDropDown"
                                    v-if="showLangagesDropDown"
                                    @click="closeCollapseMenu"
                                >
                                    <template
                                        v-for="langage in langages"
                                    >
                                        <a 
                                            class="cursor-pointer dropdown-item red-background-item text-center py-3 px-5 custom-nav-link text-shadow"
                                            :class="{
                                                'arabic-button-font':langage.value === 'ma'
                                            }" 
                                            :key="langage.value"
                                            v-if="langage.value !== selectedLangage"
                                            @click="selectLangage(langage.value)"
                                        >
                                        {{langage.name}}
                                        </a>
                                    </template>
                                </div>
                            </transition>
                        </li>
                    </transition-group>
                    
                </ul>
            </div>
        </transition>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default{
    data(){
        return {
            showNosServicesDropDown:false,
            showLangagesDropDown:false,
            showCollapseNavBar:false,
            mouseStillOnServices:false, 
            nosServices:[
                { title : 'MENU_WEBSITE', routeName : 'website-creation' },
                { title : 'MENU_E_COMMERCE', routeName : 'solution-e-commerce' },
                { title : 'MENU_MARKETING_DIGITAL', routeName : 'digital-marketing' },
                { title : 'MENU_MARKETING_AUTOMATION', routeName : 'automation-marketing' },
                { title : 'MENU_SEO', routeName : 'seo' },
                { title : 'MENU_TRAININGS', routeName : 'formations-advices' }
            ],
            langages:[
                {
                    name:'Français',
                    value:'fr'
                },
                {
                    name:'English',
                    value:'en'
                },
                {
                    name:'مغربي',
                    value:'ma'
                }
            ]
        }
    }
    ,
    methods:{
        ...mapActions([
            'changeSelectedLangage'
        ]),
        closeDropdowns(){
            this.showNosServicesDropDown = false;
            this.showLangagesDropDown = false
        },
        closeCollapseMenu(){
            this.showCollapseNavBar=false;
        },
        nosServicesDropDownMouseEnter(){
            if(! this.showCollapseNavBar){
                this.showNosServicesDropDown=true;
            }
        },
        nosServicesDropDownMouseLeave(){
            if(! this.showCollapseNavBar){
                this.showNosServicesDropDown=false;
                this.mouseStillOnServices=false; 
            }
        },
        langageDropDownMouseEnter(){
            if(! this.showCollapseNavBar){
                this.showLangagesDropDown=true;
            }
        },
        langageDropDownMouseLeave(){
            if(! this.showCollapseNavBar){
                this.showLangagesDropDown=false;
            }
        },
        selectLangage(langage){
            this.changeSelectedLangage(langage);
            if(this.device === 'pc'){
                this.showLangagesDropDown = false;
            }
        },
        toggleCollapseNavBar(){
            this.showCollapseNavBar=!this.showCollapseNavBar;
            this.showLangagesDropDown = false;
            this.showNosServicesDropDown = false;
        },
        toggleNosServicesDropDownResponsive(){
                this.showLangagesDropDown = false;
                this.showNosServicesDropDown=!this.showNosServicesDropDown;
        },
        toggleLangagesDropDownResponsive(){
            if(this.showCollapseNavBar){
                this.showNosServicesDropDown = false;
                this.showLangagesDropDown=!this.showLangagesDropDown;
            }
        },
        onServicesClicked(){
            this.mouseStillOnServices=true;  
            this.closeDropdowns();
        }
    },
    created(){
        document.addEventListener('click',(event)=>{
            if(this.showCollapseNavBar){
                if(!document.getElementById('navbarSupportedContent').contains(event.target) && !document.getElementById('toggle-menu-button').contains(event.target)){
                    this.showCollapseNavBar = false;
                }
            }
        });
    }
}
</script>

<style scoped>
    .dropdown-transition{
        transition: all 1s;
    }
    .red-background-item{
        transition: all 1s;
    }
    .red-background-item:hover{
        transition: all 500ms;
        color: #fff !important;
        background-color:#e3342f;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    }
    .black-border-hover:hover{
        border : 2px solid rgba(0,0,0,1);
    }
    .red-background-dropdown{
        transition: all 500ms;
        color: #fff !important;
        font-weight: 500;
        background-color:#e3342f;
    }
    #toggle-menu-button i{
        color:#343a40 !important;
    }
    .custom-nav-link{
        font-weight: 500;
        color:#343a40 !important;
    }
    .transparent-border{
        border : 2px solid rgba(0,0,0,0);
    }
    .custom-dropdown-menu{
        min-width: fit-content;
    }
    .border-left-collapse{
        border-left: 2px solid rgb(0,0,0) !important;
    }
    .border-right-collapse{
        border-right: 2px solid rgb(0,0,0) !important;
    }
    .border-top-collapse{
        border-top: 2px solid rgb(0,0,0) !important;
    }
    .border-bottom-collapse{
        border-bottom: 2px solid rgb(0,0,0) !important;
    }
    .border-left-collapse-hover:hover{
        border-left: 2px solid rgb(0,0,0) !important;
    }
    .border-right-collapse-hover:hover{
        border-right: 2px solid rgb(0,0,0) !important;
    }
    .border-top-collapse-hover:hover{
        border-top: 2px solid rgb(0,0,0) !important;
    }
    .border-bottom-collapse-hover:hover{
        border-bottom: 2px solid rgb(0,0,0) !important;
    }
    .black-border{
        border: 2px solid rgb(0,0,0);
    }
    button:focus{
        outline: none;
    }
    .bar-toggle{
        color: black;
        font-size: 30px;
    }
    .bg-white-95{
        background-color: rgba(247,247,247,0.95);
    }
    .bg-0{
        background-color: transparent;
    }
    .mobile-custom-menu{
        position: absolute;
        top: 100%;
        width: 100%;
        z-index: 1000;
        margin-bottom: 16px;
    }
    .overflow-hidden{
        overflow:hidden;
    }
    .little-negative-margin-top{
        margin-top:-2px !important;
    }
    .deroule-service-dropdown-enter{
    }
    .deroule-service-dropdown-leave-to{
    }
    .deroule-service-dropdown-enter-active{
        animation : deroule-service-dropdown-in 700ms ease-out forwards;
    }
    .deroule-service-dropdown-leave-active{
        animation : deroule-service-dropdown-out 700ms ease-out forwards;
    }
    .slide-move{
        transition : transform 700ms;
    }
    @keyframes deroule-service-dropdown-in {
        from {
            height:0;
        }
        to {
            height:330px;
        }
    }
    @keyframes deroule-service-dropdown-out {
        from {
            height:330px;
        }
        to {
            height:0;
        }
    }
    .deroule-langage-dropdown-enter{
    }
    .deroule-langage-dropdown-leave-to{
    }
    .deroule-langage-dropdown-enter-active{
        animation : deroule-langage-dropdown-in 700ms ease-out forwards;
    }
    .deroule-langage-dropdown-leave-active{
        animation : deroule-langage-dropdown-out 700ms ease-out forwards;
    }
    @keyframes deroule-langage-dropdown-in {
        from {
            height:0;
        }
        to {
            height:110px;
        }
    }
    @keyframes deroule-langage-dropdown-out {
        from {
            height:110px;
        }
        to {
            height:0;
        }
    }
</style>