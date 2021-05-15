import {SET_SELECTED_TABLE} from "./types";

export const setSelectedTable = (l) =>{

    return{
        type:SET_SELECTED_TABLE,
        payload: l
    }
}
