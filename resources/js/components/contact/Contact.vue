<template>
    <div class="upper-form-container">
        <div class="app-form-container">
            <transition-group 
                tag="div" 
                class="row" 
                id="contact-form" 
                name="slide" 
                appear
            >
                
                <div 
                    class="app-form-title col-12"
                    :class="{
                        'f-60 gabriola': !isArabic,
                        'f-56 al-bayan':isArabic
                    }"
                    key="form-title"
                >
                    {{ 'TITLE_HOME_PAGE_CONTACT' | translate }}
                </div>
                <div 
                    class="app-form-text col-lg-6 mx-1 col-md-8"
                    :class="{
                        'f-20 gabriola': !isArabic,
                        'f-18 al-bayan':isArabic
                    }"
                    key="form-text"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor mauris sed mi gravida laoreet. Donec et elementum felis. Morbi quis odio eros. 
                </div>
                <div 
                    class="app-form-group col-lg-6 mx-1 col-md-8"
                    v-for="field in fields"
                    :key="field.name+'_key'"
                >
                    <input 
                        v-if="field.isInput"
                        v-model="newMessage[field.name]"
                        @input="deleteErrors(field.name)"
                        :id="field.name"
                        :type="field.type" 
                        :placeholder="translate(field.placeholder)" 
                        class="app-form-input"
                        :class="{
                            'app-text-danger red-place-holder': !errorsCorrected[field.name],
                            'f-20 gabriola': !isArabic,
                            'f-18 al-bayan':isArabic
                        }"
                    >
                    <textarea 
                        v-if="!field.isInput"
                        v-model="newMessage[field.name]"
                        @input="deleteErrors(field.name)"
                        :id="field.name"
                        :type="field.type" 
                        :placeholder="translate(field.placeholder)" 
                        class="app-form-input"
                        :class="{
                            'app-text-danger red-place-holder': !errorsCorrected[field.name],
                            'f-20 gabriola': !isArabic,
                            'f-18 al-bayan':isArabic
                        }"
                        rows=6
                    >
                    </textarea>
                    <div 
                        class="app-form-errors-item" 
                        :class="{
                            'f-18 gabriola text-left' : !isArabic, 
                            'f-16 al-bayan text-right' : isArabic
                        }" 
                        v-for="error in errors[field.name]"
                    >
                        <i class="fa fa-exclamation-triangle f-18 app-text-danger mx-1"></i>
                        {{ 'CONTACT_ERROR_' + field.name.toUpperCase() + '_' + error | translate }}
                    </div>
                </div>
                <div 
                    class="col-lg-6 mx-1 col-md-8 d-flex justify-content-center p-0"
                    key="submit-button"
                >
                    <div 
                        class="app-form-submit" 
                        @click="submitMessage"
                        :class="{
                            'f-20 gabriola': !isArabic,
                            'f-18 al-bayan':isArabic
                        }"
                    >
                        <div 
                            class="spinner-grow" 
                            role="status" 
                            v-if="sending"
                        >
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div v-if="!sending">
                            {{'BUTTON_CONTACT_SUBMIT' | translate }}
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default{
    data(){
        return {
            newMessage:{
                name:'',
                email:'',
                phone:'',
                object:'',
                message:'',
            },
            errors:{
                name:[],
                email:[],
                phone:[],
                object:[],
                message:[],
            },
            errorsCorrected:{
                name:true,
                email:true,
                phone:true,
                object:true,
                message:true,
            },
            fields:[
                {
                    name:'name',
                    type:'text',
                    placeholder:'CONTACT_FORM_NAME',
                    isInput:true
                },
                {
                    name:'email',
                    type:'email',
                    placeholder:'CONTACT_FORM_EMAIL',
                    isInput:true
                },
                {
                    name:'phone',
                    type:'phone',
                    placeholder:'CONTACT_FORM_PHONE',
                    isInput:true
                },
                {
                    name:'object',
                    type:'text',
                    placeholder:'CONTACT_FORM_OBJECT',
                    isInput:true
                },
                {
                    name:'message',
                    type:null,
                    placeholder:'CONTACT_FORM_MESSAGE',
                    isInput:false
                }
            ],
            sending:false
        }
    },
    methods:{
        fillErrors(errors){
            for(let key in this.errors){
                if(errors[key]){
                    this.errors[key]=errors[key];
                    this.errorsCorrected[key]=false;
                } else {
                    this.errors[key]=[];
                }
            }
        },
        deleteErrors(field){
            this.errorsCorrected[field]=true;
        },
        submitMessage(){
            if(!this.sending){
                this.sending = true;
                axios.post('/api/messages',this.newMessage).then(response => {
                    this.resetData();
                    this.sending = false;
                    this.flash('FLASH_CONTACT_SUBMIT_SUCCESS','success','bottom');
                    this.scrollTo("upper-header-container");
                })
                .catch((error)=>{
                    if(error.response.data.errors){
                        this.fillErrors(error.response.data.errors);
                        this.sending = false;
                        this.flash('FLASH_CONTACT_SUBMIT_FAIL','danger','bottom');
                        this.scrollTo("contact-form");
                    } else {
                        this.flash('FLASH_CONTACT_UNKOWN_ERROR','danger','bottom');
                        this.sending = false;
                    }

                })
            }
        },
        resetData(){
            this.errors = {
                name:[],
                email:[],
                phone:[],
                object:[],
                message:[],
            }
            this.newMessage={
                name:'',
                email:'',
                phone:'',
                object:'',
                message:'',
            };
        },
        scrollTo(id){
            const elmnt = document.getElementById(id);
            elmnt.scrollIntoView({behavior:"smooth"});
        },
        initializeTheHeaderColor(){
            this.switchDarkMode(true);
        },
        manageDarkModeOfTheHeader(){
            setTimeout(()=>{
                this.initializeTheHeaderColor();
            },500);
        }
    },
    mounted(){
        this.manageDarkModeOfTheHeader();
    }
}
</script>

<style lang="scss" scoped>

@import '../../../sass/app';

.upper-form-container{
    @extend .d-flex, .justify-content-center, .pb-3, .app-bg-black;
    min-height:100vh;
}
.app-form-container{
    @extend .p-1, .p-lg-4, .p-lg-3, .p-sm-2, .p-xl-5;
}
.app-form-title{
    @extend .mb-3, .mt-2, .mt-lg-0, .text-center, .text-shadow-sm, .text-uppercase, .app-text-white;
}
.app-form-text{
    @extend .mb-5, .text-center, .app-text-white;
}
.app-form-group{
    @extend .my-3, .p-0, .text-center;
}
.app-form-input{
    transition : all 500ms ease-out;
    @extend .body-bg, .border-0, .pb-1, .pt-2, .px-2, .w-95, .inset-shadow-lg;
    resize: none;
    &:focus{
        outline-offset:0;
        outline:none;
        @extend .w-100;
    }
}
.app-form-errors-item{
    @extend .app-text-white, .mt-3, .px-4;
}
.app-form-submit{
    transition : all 500ms ease-out;
    height:57px;
    @extend .app-bg-black, .app-text-white, .border-white-2, .cursor-pointer, .p-2, .text-center, .shadow-lg, .text-shadow-sm, .mt-4, .d-flex, .align-items-center, .justify-content-center, .w-95;
    &:hover{
        @extend .app-bg-danger, .app-text-white, .w-100;
    }
}
.red-place-holder::-webkit-input-placeholder { 
  color: $red;
}
.red-place-holder::-moz-placeholder { 
  color: $red;
}
.red-place-holder:-ms-input-placeholder { 
  color: $red;
}
.red-place-holder:-moz-placeholder { 
  color: $red;
}
.red-place-holder::placeholder { 
  color: $red;
}
#contact-form{
    @extend .justify-content-center, .align-items-center, .h-100, .px-4;
}
</style>