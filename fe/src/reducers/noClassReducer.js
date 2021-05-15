import {ADD_ITEM, SET_NO_CLASS} from "../actions/types";
import {DELETE_ITEM} from "../actions/types";

//define initial state

const initialState = {
    list:[{name:"one",day:"Monday",st:"12:00",ft:"14:00"},{name:"two",day:"Tuesday",st:"10:00",ft:"14:00"}],
    isEnabled:false
}



//define reducer function
const noClassReducer = (state = initialState,action) => {

    switch(action.type){
        case ADD_ITEM: return {
            ...state,
            list:[...state.list,action.payload]
        };
        case DELETE_ITEM: {
            const clone = [...state.list];
            for(let i=0;i<state.list.length;++i){
                if(state.list[i].name===action.payload){
                    clone.splice(i,1);
                }
                else{
                }
            }
            return {
                ...state,
                list: clone
            };}
        case SET_NO_CLASS: return {
            ...state,
            isEnabled:action.payload
        };
        default: return state;
    }



}
export default noClassReducer;
