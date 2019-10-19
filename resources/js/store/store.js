export default {
    state:{
        langage :{
            name:'Français',
            value:'fr'
        }
    },
    getters:{
        selectedLangage(state){
            return state.langage;
        }
    },
    mutations:{
        changeLangage(state,payload){
            state.langage = payload;
        }
    },
    actions:{
        changeSelectedLangage({ commit },payload){
            commit('changeLangage',payload);
        }
    }
}