<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent d-flex align-items-center p-0 mt-2">
        <a class="navbar-brand" href="#"><img src="../../../images/logo/logo_171x96.png" alt="AB.IT Logo"></a>
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
                <li class="nav-item">
                    <a class="nav-link p-3 custom-nav-link red-background-item" href="#">Notre Agence</a>
                </li>
                <li 
                    class="nav-item dropdown" 
                    :class="{'show ':showNosServicesDropDown}"
                    @mouseleave="toggleNosServicesDropDown"
                >
                    <a 
                        class="nav-link p-3 custom-nav-link dropdown-toggle" 
                        :class="{'red-background-dropdown shadow':showNosServicesDropDown}"
                        href="#" 
                        id="nosServicesDropDown" 
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        :aria-expanded="showNosServicesDropDown"
                        @mouseenter="toggleNosServicesDropDown"
                        @click="toggleNosServicesDropDownResponsive"
                    >
                        Nos Services
                    </a>
                    <div 
                        class="dropdown-menu custom-dropdown-menu rounded-0 p-0 bg-white-30 m-0" 
                        :class="{
                            'show shadow':showNosServicesDropDown,
                            'border-top-collapse border-bottom-collapse':showCollapseNavBar,
                            'black-border ':!showCollapseNavBar
                        }" 
                        aria-labelledby="nosServicesDropDown"
                    >
                        <a 
                            class="dropdown-item red-background-item text-center py-3 custom-nav-link" 
                            href="#"
                            v-for="service in nosServices"
                            :key="service"
                        >
                        {{service}}
                        </a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link p-3 custom-nav-link red-background-item" href="#">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link p-3 custom-nav-link red-background-item" href="#">Contact</a>
                </li>
                <li 
                    class="nav-item dropdown"
                    :class="{'show':showLangagesDropDown}"
                    @mouseleave="toggleLangagesDropDown"
                >
                    <a 
                        class="nav-link p-3 custom-nav-link dropdown-toggle" 
                        :class="{'red-background-dropdown shadow':showLangagesDropDown}"
                        href="#" 
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
                            class="dropdown-item red-background-item text-center py-3 px-5 custom-nav-link" 
                            href="#"
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
            nosServices:[
                'Création de Site Web',
                'Solution E-Commerce',
                'Marketing Digitale',
                'Marketing Automation',
                'Réferencement et Visibilité',
                'Formation & Conseils'
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
        toggleNosServicesDropDown(){
            if(! this.showCollapseNavBar){
                this.showNosServicesDropDown=!this.showNosServicesDropDown;
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
            if(this.showCollapseNavBar){
                this.showLangagesDropDown = false;
                this.showNosServicesDropDown=!this.showNosServicesDropDown;
            } else {

            }
        },
        toggleLangagesDropDownResponsive(){
            if(this.showCollapseNavBar){
                this.showNosServicesDropDown = false;
                this.showLangagesDropDown=!this.showLangagesDropDown;
            } else {

            }
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
    .red-background-dropdown{
        color: #fff !important;
        background-color:#e3342f;
    }
    .custom-nav-link{
        font-weight: 500;
    }
    .custom-dropdown-menu{
        min-width: fit-content;
    }
    .border-top-collapse{
        border-top: 2px solid rgb(0,0,0);
    }
    .border-bottom-collapse{
        border-bottom: 2px solid rgb(0,0,0);
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
        background-color: rgba(255,255,255,0.25);
    }
</style>