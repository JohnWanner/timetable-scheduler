import {SET_GROUP_BY_SUBJECT} from "../actions/types";
//define initial state
const initialState = {
    list:[]
}

//define reducer function
const groupBySubject = (state = initialState,action) => {

    switch(action.type){
        case SET_GROUP_BY_SUBJECT: return {
            list: [...action.payload]
        };

        default: return state;
    }
}

export default groupBySubject;
