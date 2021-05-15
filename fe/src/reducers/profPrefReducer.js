import {SET_PROF_PREF} from "../actions/types";
import {REARRANGE_PROF} from "../actions/types";

//define initial state


const initialState = {
    list:[],
    isEnabled:false
}



//define reducer function
const profPrefReducer = (state = initialState,action) => {

    switch(action.type){
        case REARRANGE_PROF: {
            console.log("REDUCER");
            console.log(action.payload);
            return {
                ...state,
                list:action.payload
            };
        }
        case SET_PROF_PREF: return {
            ...state,
            isEnabled:action.payload
        };
        default: return state;
    }



}
export default profPrefReducer;
