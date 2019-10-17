<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent d-flex align-items-center p-0 mt-2">
        <router-link tag="a" :to="{name:'home'}" class="navbar-brand"><img src="../../../images/logo/logo_171x96.png" alt="AB.IT Logo"></router-link>
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
                'show shadow bg-white-30 black-border':showCollapseNavBar,
                'mt-n4':!showCollapseNavBar
            }" 
            id="navbarSupportedContent"
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
                        class="nav-link p-3 custom-nav-link transparent-border red-background-item" 
                        :class="{
                            'black-border-hover':!showCollapseNavBar,
                            'border-bottom-collapse-hover':showCollapseNavBar
                            }" 
                        @mouseenter="closeDropdowns"
                    >
                    Notre Agence
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
                        class="nav-link p-3 custom-nav-link transparent-border dropdown-toggle" 
                        :class="{
                            'red-background-dropdown shadow': (showNosServicesDropDown || mouseStillOnServices),
                            'border-left-collapse border-right-collapse border-top-collapse':(!showCollapseNavBar && showNosServicesDropDown),
                            'border-left-collapse border-right-collapse border-top-collapse border-bottom-collapse':(!showCollapseNavBar && mouseStillOnServices)
                        }"
                        id="nosServicesDropDown" 
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        :aria-expanded="showNosServicesDropDown"
                    >
                        Nos Services
                    </router-link>
                    <div 
                        class="dropdown-menu custom-dropdown-menu rounded-0 p-0 bg-white-30 m-0" 
                        :class="{
                            'show shadow':showNosServicesDropDown,
                            'border-bottom-collapse':showCollapseNavBar,
                            'black-border ':!showCollapseNavBar
                        }" 
                        aria-labelledby="nosServicesDropDown"
                    >
                        <router-link
                            tag="a"
                            class="dropdown-item red-background-item text-center py-3 custom-nav-link" 
                            v-for="service in nosServices"
                            :key="service.title"
                            :to="{ name : service.routeName }"
                        >
                        {{service.title}}
                        </router-link>
                    </div>
                </li>
                <li 
                    v-if="showCollapseNavBar"
                    class="nav-item dropdown" 
                    :class="{'show ':showNosServicesDropDown}"
                    @mouseleave="nosServicesDropDownMouseLeave"
                    @mouseenter="nosServicesDropDownMouseEnter"
                >
                    <a
                        class="cursor-pointer nav-link p-3 custom-nav-link transparent-border dropdown-toggle" 
                        :class="{
                            'red-background-dropdown shadow':showNosServicesDropDown,
                            'border-top-collapse border-bottom-collapse': (showCollapseNavBar && showNosServicesDropDown)
                        }"
                        id="nosServicesDropDown" 
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        :aria-expanded="showNosServicesDropDown"
                        @click="toggleNosServicesDropDownResponsive"
                    >
                        Nos Services
                    </a>
                    <div 
                        class="dropdown-menu custom-dropdown-menu rounded-0 p-0 bg-white-30 m-0" 
                        :class="{
                            'show shadow':showNosServicesDropDown,
                            'border-bottom-collapse':showCollapseNavBar,
                            'black-border ':!showCollapseNavBar
                        }" 
                        aria-labelledby="nosServicesDropDown"
                        @click="closeCollapseMenu"
                    >
                        <router-link
                            tag="a"
                            class="dropdown-item red-background-item text-center py-3 custom-nav-link" 
                            v-for="service in nosServices"
                            :key="service.title"
                            :to="{ name : service.routeName }"
                        >
                        {{service.title}}
                        </router-link>
                    </div>
                </li>
                <li
                    class="nav-item"
                    @click="closeCollapseMenu"
                >
                    <router-link
                        tag="a"
                        :to="{ name : 'blog' }" 
                        class="nav-link p-3 custom-nav-link transparent-border red-background-item" 
                        :class="{
                            'black-border-hover':!showCollapseNavBar,
                            'border-top-collapse-hover border-bottom-collapse-hover':showCollapseNavBar
                        }" 
                        @mouseenter="closeDropdowns"
                    >
                    Blog
                    </router-link>
                </li>
                <li 
                    class="nav-item"
                    @click="closeCollapseMenu"
                >
                    <router-link 
                        tag="a"
                        :to="{ name : 'contact' }" 
                        class="nav-link p-3 custom-nav-link transparent-border red-background-item" 
                        :class="{
                            'black-border-hover':!showCollapseNavBar,
                            'border-top-collapse-hover border-bottom-collapse-hover':showCollapseNavBar
                            }" 
                        @mouseenter="closeDropdowns"
                    >
                    Contact
                    </router-link>
                </li>
                <li 
                    class="nav-item dropdown"
                    :class="{'show':showLangagesDropDown}"
                    @mouseleave="toggleLangagesDropDown"
                >
                    <a 
                        class="nav-link p-3 custom-nav-link transparent-border dropdown-toggle cursor-pointer" 
                        :class="{
                            'red-background-dropdown shadow':showLangagesDropDown,
                            'border-left-collapse border-right-collapse border-top-collapse': (!showCollapseNavBar && showLangagesDropDown),
                            'border-top-collapse':(showCollapseNavBar && showLangagesDropDown)
                            }"
                        id="langagesDropDown" 
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true"
                        :aria-expanded="showLangagesDropDown"
                        @mouseenter="toggleLangagesDropDown"
                        @click="toggleLangagesDropDownResponsive"
                    >
                        {{selectedLangage}}
                    </a>
                    <div 
                        class="dropdown-menu custom-dropdown-menu rounded-0 p-0 bg-white-30 m-0" 
                        :class="{
                            'show shadow':showLangagesDropDown,
                            'border-top-collapse':showCollapseNavBar,
                            'black-border':!showCollapseNavBar
                            }" 
                        aria-labelledby="langagesDropDown"
                    >
                    <template
                        v-for="langage in langages"
                    >
                        <a 
                            class="cursor-pointer dropdown-item red-background-item text-center py-3 px-5 custom-nav-link" 
                            :key="langage"
                            v-if="langage !== selectedLangage"
                            @click="selectLangage(langage)"
                        >
                        {{langage}}
                        </a>
                    </template>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default{
    data(){
        return {
            showNosServicesDropDown:false,
            showLangagesDropDown:false,
            showCollapseNavBar:false,
            mouseStillOnServices:false,       
            nosServices:[
                { title : 'Création de Site Web', routeName : 'website-creation' },
                { title : 'Solution E-Commerce', routeName : 'solution-e-commerce' },
                { title : 'Marketing Digitale', routeName : 'digital-marketing' },
                { title : 'Marketing Automation', routeName : 'automation-marketing' },
                { title : 'Réferencement et Visibilité', routeName : 'seo' },
                { title : 'Formation & Conseils', routeName : 'formations-advices' }
            ],
            langages:[
                'Français',
                'Anglais',
                'Arabe' 
            ],
            selectedLangage:'Français'
        }
    },
    methods:{
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
        toggleLangagesDropDown(){
            if(! this.showCollapseNavBar){
                this.showLangagesDropDown=!this.showLangagesDropDown;
            }
        },
        selectLangage(langage){
            this.selectedLangage = langage;
            this.showLangagesDropDown = false;
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
            } else {

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
    .red-background-item:hover{
        color: #fff !important;
        background-color:#e3342f;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    }
    .black-border-hover:hover{
        border : 2px solid rgba(0,0,0,1);
    }
    .red-background-dropdown{
        color: #fff !important;
        background-color:#e3342f;
    }
    .custom-nav-link{
        font-weight: 500;
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
    .bg-white-30{
        background-color: rgba(247,247,247,0.9);
    }
    .cursor-pointer{
        cursor:pointer;
    }
</style>