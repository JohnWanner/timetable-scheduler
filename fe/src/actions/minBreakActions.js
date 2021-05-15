import {SET_MIN_BREAK} from "./types";

export const setMinBreak = (num,sw) =>{
    return{

        type:SET_MIN_BREAK,
        payload: {
            value: num,
            isEnabled: sw
        }
    }
}