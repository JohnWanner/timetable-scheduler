import {ADD_GROUP, INIT_SUBARRAY} from "../actions/types";
import {DELETE_GROUP} from "../actions/types";
import {DELETE_GROUP_BY_LABEL} from "../actions/types";
import {INIT_GRPARRAY} from "../actions/types";
//define initial state

// const coloring = ["lightsalmon","lightseagreen","lightcoral","lightblue","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightskyblue","burlywood","darkseagreen","lavender","lightsteelblue","lemonchiffon"];

const initialState = {

    groups:
    [
        {s_name:"Analysis II L",g_name:"G1",day:"Thursday",st:"17:30",ft:"19:30",color:"lightsalmon",p_name: "Csörgő István"},
        {s_name:"Analysis II P",g_name:"G1",day:"Wednesday",st:"14:00",ft:"16:00",color:"lightseagreen",p_name: "Chripkó Ágnes"},
        {s_name:"Analysis II P",g_name:"G2",day:"Tuesday",st:"14:00",ft:"16:00",color:"lightseagreen",p_name: "Filipp Zoltán"},
        {s_name:"Web Prog L",g_name:"G1",day:"Monday",st:"13:00",ft:"14:00",color:"lightcoral",p_name: "Horváth Győző"},
        {s_name:"Web Prog P",g_name:"G1",day:"Wednesday",st:"08:00",ft:"10:00",color:"lightblue",p_name: "Visnovitz Márton"},
        {s_name:"Web Prog P",g_name:"G2",day:"Tuesday",st:"08:00",ft:"10:00",color:"lightblue",p_name: "Bucsánszki Tamás"},
        {s_name:"Web Prog P",g_name:"G3",day:"Tuesday",st:"18:00",ft:"20:00",color:"lightblue",p_name: "Rakonczai Sándor"},
        {s_name:"A&D II L",g_name:"G1",day:"Friday",st:"10:00",ft:"12:00",color:"lightcyan",p_name: "Ásványi Tibor"},
        {s_name:"A&D II P",g_name:"G1",day:"Monday",st:"14:00",ft:"16:00",color:"lightgoldenrodyellow",p_name: "Ásványi Tibor"},
        {s_name:"A&D II P",g_name:"G2",day:"Tuesday",st:"10:00",ft:"12:00",color:"lightgoldenrodyellow",p_name: "Szabó László"},
        {s_name:"App of DM",g_name:"G1",day:"Thursday",st:"10:00",ft:"12:00",color:"lightgreen",p_name: "Burcsi Péter"},
        {s_name:"App of DM",g_name:"G2",day:"Thursday",st:"08:00",ft:"10:00",color:"lightgreen",p_name: "Tompa Gábor"},
        {s_name:"Tools of sw projects",g_name:"G1",day:"Tuesday",st:"10:00",ft:"12:00",color:"lightpink",p_name: "Gera Zoltán"},
        {s_name:"Intro to ML",g_name:"G1",day:"Wednesday",st:"16:00",ft:"17:00",color:"lightskyblue",p_name: "Lőrincz András"}

    ]
}



//define reducer function
const groupsReducer = (state = initialState,action) => {

    switch(action.type){
        case ADD_GROUP: return {
            ...state,//DO I NEED THIS?
            groups: [...state.groups,action.payload]
        };
        case DELETE_GROUP: {
            const clone = [...state.groups];
            clone.splice(action.payload,1);

            return {
                ...state,
                groups: clone
            };}
        case DELETE_GROUP_BY_LABEL: {
            const clone = [...state.groups];
            for(let i=0;i<state.groups.length;++i){
                if(state.groups[i].s_name===action.payload[0] && state.groups[i].g_name===action.payload[1]){
                    clone.splice(i,1);
                }
                else{
                }
            }
            return {
                ...state,
                ...state,
                groups: clone
            };}
        case INIT_GRPARRAY:
            return {
                ...state,
                groups: action.payload
            };
        default: return state;
    }



}

export default groupsReducer;
