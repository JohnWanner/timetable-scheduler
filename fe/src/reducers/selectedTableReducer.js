import {SET_SELECTED_TABLE} from "../actions/types";


//define initial state


const initialState = {
    selected:0
}



//define reducer function
const selectedTableReducer = (state = initialState,action) => {

    switch(action.type){
        case SET_SELECTED_TABLE: {

            return {
                ...state,
                selected:action.payload
            };
        }

        default: return state;
    }



}
export default selectedTableReducer;
