import {ADD_GROUP, SET_NO_CLASS} from "./types";
import {ADD_ITEM} from "./types";
import {DELETE_ITEM} from "./types";

export const addItem = (i) =>{
    return{
        type:ADD_ITEM,
        payload: i
    }
}

export const deleteItem = (n) =>{
    return{
        type:DELETE_ITEM,
        payload: n
    }
}

export const setNoClass = (b) =>{
    return{
        type:SET_NO_CLASS,
        payload: b
    }
}