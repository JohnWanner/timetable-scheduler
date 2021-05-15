import {ADD_SUBJECT } from "./types";
import {DELETE_SUBJECT} from "./types";
import {DELETE_SUBJECT_BY_NAME} from "./types";
import {INIT_SUBARRAY} from "./types";


export const addSubject = (sub) =>{
    return{
        type:ADD_SUBJECT,
        payload: sub
    }
}

export const deleteSubject = (index) =>{
    return{
        type:DELETE_SUBJECT,
        payload: index
    }
}

export const deleteSubjectByName = (n) =>{
    return{
        type:DELETE_SUBJECT_BY_NAME,
        payload: n
    }
}

export const initSubArray = (n) =>{
    return{
        type:INIT_SUBARRAY,
        payload: n
    }
}

