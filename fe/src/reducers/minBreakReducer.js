import {SET_MIN_BREAK} from "../actions/types";
//define initial state
const initialState = {
    value: 0,
    isEnabled:false
}

//define reducer function
const minBreakReducer = (state = initialState,action) => {

    switch(action.type){
        case SET_MIN_BREAK: return{
            ...state,
            value:action.payload.value,
            isEnabled:action.payload.isEnabled
        }
        default: return state;
    }
}

export default minBreakReducer;
