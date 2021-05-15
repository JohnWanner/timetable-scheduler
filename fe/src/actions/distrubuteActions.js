import {SET_DISTRIBUTE_CLASSES} from "./types";

export const setDistributeClasses = (sw) =>{

    return{
        type:SET_DISTRIBUTE_CLASSES,
        payload: {
            isEnabled:sw
        }
    }
}