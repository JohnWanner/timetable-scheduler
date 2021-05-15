import {ADD_SUBJECT, INIT_SUBARRAY} from "../actions/types";
import {DELETE_SUBJECT} from "../actions/types";
import {DELETE_SUBJECT_BY_NAME} from "../actions/types";


let coloring = ["burlywood","darkseagreen","lavender","lightsteelblue","NavajoWhite"];



const initialState = {
    subjects:
        []

}



//define reducer function
const subjectsReducer = (state = initialState,action) => {

    switch(action.type){
        case ADD_SUBJECT: {
            console.log("POPPING")
            console.log(coloring)
            let c = coloring.pop()
            console.log(coloring)
            return {
                ...state,//DO I NEED THIS?
                subjects: [...state.subjects,{s_name:action.payload,color:c}]
            }
        }
        case DELETE_SUBJECT: {
            const clone = [...state.subjects];
            return {
            ...state,
            ...state,
            subjects: clone
        };}
        case DELETE_SUBJECT_BY_NAME: {
            const clone = [...state.subjects];
            for(let i=0;i<state.subjects.length;++i){
                if(state.subjects[i].s_name===action.payload){
                    let tmp = clone.splice(i,1);
                    console.log("PUSHING")
                    console.log(coloring)
                    coloring.push(tmp[0].color);
                    console.log(coloring)
                }
                else{
                }
            }
            return {
                ...state,
                subjects: clone
            };}
        case INIT_SUBARRAY:
            return {
                ...state,
                subjects: action.payload
            };
        default: return state;
    }
}

export default subjectsReducer;
