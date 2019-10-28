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
        collapseMenuOpen:false,
        paddingTop:null,
        darkMode:false
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
        },
        paddingTop(state){
            return state.paddingTop;
        },
        darkMode(state){
            return state.darkMode;
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
        toggleFlash(state, payload){
            state.flash.show = payload;
        },
        toggleCollapseMenu(state,payload){
            state.collapseMenuOpen = payload;
        },
        putPaddingTop(state,payload){
            state.paddingTop = payload;
        },
        switchDarkMode(state,payload){
            state.darkMode = payload;
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
            commit('toggleFlash',true);
            setTimeout(()=>{
                commit('toggleFlash',false);
            },6000);
        },
        toggleFlash({commit}){
            commit('toggleFlash',false);
        },
        toggleCollapseMenu({ commit },payload){
            commit('toggleCollapseMenu',payload);
        },
        putPaddingTop({ commit },payload){
            commit('putPaddingTop',payload);
        },
        switchDarkMode({ commit },payload){
            commit('switchDarkMode',payload);
        }
    }
}