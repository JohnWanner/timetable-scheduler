import {SET_GENERATED_LIST} from "./types";

export const setGeneratedList = (l) =>{
    return{
        type:SET_GENERATED_LIST,
        payload: l
    }
}