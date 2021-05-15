import {SET_GENERATED_LIST} from "../actions/types";
//define initial state
const initialState = {
    list:[]
}

//define reducer function
const generatedListReducer = (state = initialState,action) => {

    switch(action.type){
        case SET_GENERATED_LIST: return {
            list: [...action.payload]
        };

        default: return state;
    }
}

export default generatedListReducer;
