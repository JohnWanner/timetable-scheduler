import {SET_DISTRIBUTE_CLASSES} from "../actions/types";
//define initial state
const initialState = {
    isEnabled:false
}

//define reducer function
const distributeClassesReducer = (state = initialState,action) => {



    switch(action.type){
        case SET_DISTRIBUTE_CLASSES: return{
            ...state,
            isEnabled:action.payload.isEnabled
        }
        default: return state;
    }
}



export default distributeClassesReducer;