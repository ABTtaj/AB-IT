<template>
    <transition-group
        tag="div"
        class="row justify-content-center"
        name="slide"
    >
        <div key="title" class="col-md-12 text-center">
            <app-title category="contact"></app-title>
        </div>
        <div key="description" class="col-md-5 mb-4 mt-3">
            <p class="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet quam quis lacus cursus, id lobortis est viverra. Morbi sollicitudin, nisl non placerat malesuada, orci est sagittis nulla, quis egestas enim sem quis ex.             
            </p>
        </div>
        <div key="form" class="col-md-8 px-4" 
                id="contact-form">
            <transition-group
                tag="form"
                name="slide" 
            >
                <template v-for="field in fields">
                    <app-form-title 
                        :key="field.name+'-title'"
                        :input="field.name" 
                        :for="field.name" 
                        :errors="errors[field.name]"
                    ></app-form-title>
                    <input 
                        :key="field.name+'-input'"
                        v-if="field.isInput"
                        :type="field.type" 
                        :id="field.name" 
                        v-model="newMessage[field.name]" 
                        class="input-form-style py-1 px-2 my-2" 
                        :class="{'input-form-style-error':errors[field.name] && errors[field.name].length}" 
                        @input="deleteErrors(field.name)"
                    >
                    <textarea 
                        :key="field.name+'-input'"
                        v-if="!field.isInput"
                        :id="field.name" 
                        v-model="newMessage[field.name]" 
                        rows="6" 
                        class="input-form-style py-1 px-2 my-2" 
                        :class="{'input-form-style-error':errors[field.name] && errors[field.name].length}" 
                        @input="deleteErrors(field.name)"
                    ></textarea>
                </template>
            </transition-group>
        </div>
        <div key="spinner" class="col-md-12 mt-4 text-center" v-if="sending">
            <div class="spinner-grow text-danger" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div key="submit_button" class="col-md-12 d-flex justify-content-center my-3">
            <div
                class="custom-button-style"
                :class="{'arabic-button-style' : isArabic}"
                @click="submitMessage"
            >
                {{'BUTTON_CONTACT_SUBMIT' | translate}}
            </div>
        </div>
    </transition-group>
</template>

<script>
import AppTitle from '../helpers/Title.vue';
import AppFormTitle from '../helpers/FormTitle.vue';
import AppErrorMessage from '../helpers/ErrorMessage.vue';
import { mapGetters } from 'vuex';
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
            fields:[
                {
                    name:'name',
                    type:'text',
                    isInput:true
                },
                {
                    name:'email',
                    type:'email',
                    isInput:true
                },
                {
                    name:'phone',
                    type:'phone',
                    isInput:true
                },
                {
                    name:'object',
                    type:'text',
                    isInput:true
                },
                {
                    name:'message',
                    type:null,
                    isInput:false
                }
            ],
            sending:false
        }
    },
    computed:{
        ...mapGetters([
            'selectedLangage'
        ])
    },
    components:{
        AppTitle,
        AppFormTitle,
        AppErrorMessage
    },
    methods:{
        submitMessage(){
            this.sending = true;
            axios.post('/api/messages',this.newMessage).then(response => {
                this.sending = false;
                this.flash('FLASH_CONTACT_SUBMIT_SUCCESS','success','bottom');
                this.$router.push({name : 'services'});
            })
            .catch(({response})=>{
                this.sending = false;
                if(response.data.errors){
                    this.errors=response.data.errors;
                    this.flash('FLASH_CONTACT_SUBMIT_FAIL','danger','bottom');

                const elmnt = document.getElementById("contact-form");
                elmnt.scrollIntoView({behavior:"smooth"});
                } else {
                    this.flash('FLASH_CONTACT_UNKOWN_ERROR','danger','bottom');
                }
            })
        },
        deleteErrors(field){
            this.errors[field]=[];
        },
        scrollToForm(){
            const elmnt = document.getElementById("contact-form");
            elmnt.scrollIntoView({behavior:"smooth"});
        }
    }
}
</script>

<style scoped>
.input-form-style{
    transition: all 200ms;
    font-weight: 400;
    width: 100%;
    border: 2px solid rgba(0,0,0,1);
    transform: scaleX(1);
    background-color: rgba(255,255,255,0.5);
    box-shadow : 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    resize: none;
}
.input-form-style-error{
    transition: all 200ms;
    border: 2px solid #e3342f;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    transform: scaleX(1.05);
}
.input-form-style:focus{
    transition: all 200ms;
    outline-offset:0;
    outline:none;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    transform: scaleX(1.05);
}
</style>