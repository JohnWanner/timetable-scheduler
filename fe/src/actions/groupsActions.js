import {ADD_GROUP} from "./types";
import {DELETE_GROUP} from "./types";
import {DELETE_GROUP_BY_LABEL} from "./types";
import {INIT_GRPARRAY} from "./types";

export const addGroup = (grp) =>{
    return{
        type:ADD_GROUP,
        payload: grp
    }
}

export const deleteGroup = (index) =>{
    return{
        type:DELETE_GROUP,
        payload: index
    }
}

export const deleteGroupByLabel = (s_name,g_name) =>{
    return{
        type:DELETE_GROUP_BY_LABEL,
        payload: [s_name,g_name]
    }
}

export const initGrpArray = (n) =>{
    return{
        type:INIT_GRPARRAY,
        payload: n
    }
}