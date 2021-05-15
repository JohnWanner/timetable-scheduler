import {SET_PROF_PREF} from "./types";
import {REARRANGE_PROF} from "./types";


export const rearrangeProf = (l) =>{
    console.log("ACTION");
    console.log(l);
    return{
        type:REARRANGE_PROF,
        payload: l
    }
}


export const setProfPref = (b) =>{
    return{
        type:SET_PROF_PREF,
        payload: b
    }
}