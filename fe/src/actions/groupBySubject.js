import {SET_GROUP_BY_SUBJECT} from "./types";


export const setGroupBySubject = (list) =>{
    return{
        type:SET_GROUP_BY_SUBJECT,
        payload: list
    }
}
