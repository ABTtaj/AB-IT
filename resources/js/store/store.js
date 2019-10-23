export default {
    state:{
        langage : window.localStorage.getItem('langage') ? window.localStorage.getItem('langage') : 'fr',
        dir: window.localStorage.getItem('langage') ? (window.localStorage.getItem('langage') ==='ma' ? 'rtl' : 'ltr') : 'ltr',
        flash:{
            where:'',
            message:'',
            type:'',
            show:false
        },
        collapseMenuOpen:false
    },
    getters:{
        selectedLangage(state){
            return state.langage;
        },
        dir(state){
            return state.dir;
        },
        flashContent(state){
            return state.flash;
        },
        collapseMenuOpen(state){
            return state.collapseMenuOpen;
        }
    },
    mutations:{
        changeLangage(state,payload){
            state.langage = payload;
        },
        changeDir(state,payload){
            state.dir = payload;
        },
        configureFlash(state,payload){
            state.flash.message = payload.message;
            state.flash.type = payload.type;
            state.flash.where = payload.where;
        },
        toggleFlash(state){
            state.flash.show = !state.flash.show;
        },
        toggleCollapseMenu(state,payload){
            state.collapseMenuOpen = payload;
        }
    },
    actions:{
        changeSelectedLangage({ commit },payload){
            if(payload === 'ma'){
                commit('changeDir',"rtl");
            }else{
                commit('changeDir',"ltr");  
            }
            window.localStorage.setItem('langage',payload);
            commit('changeLangage',payload);
        },
        configureFlash({ commit },payload){
            commit('configureFlash',payload);
            commit('toggleFlash');
            setTimeout(()=>{
                commit('toggleFlash');
            },6000);
        },
        toggleCollapseMenu({ commit },payload){
            commit('toggleCollapseMenu',payload);
        }
    }
}