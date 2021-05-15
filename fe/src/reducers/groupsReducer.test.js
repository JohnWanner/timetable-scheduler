
import * as types from "../actions/types";
import groupsReducer from "./groupsReducer";
import {ADD_GROUP} from "../actions/types";

describe('reducer', () => {
    it('should initialize the group array', () => {
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
        expect(groupsReducer(undefined, {})).toEqual(initialState)
    })
})

describe('reducer', () => {
    it('should add a group', () => {
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

        const newState = {
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
                    {s_name:"Intro to ML",g_name:"G1",day:"Wednesday",st:"16:00",ft:"17:00",color:"lightskyblue",p_name: "Lőrincz András"},
                    {s_name:"new subject",g_name:"new group",day:"Monday",st:"12:00",ft:"14:00",color:"purple",p_name:"new teacher"}

                ]
        }
        expect(groupsReducer(initialState, {type:types.ADD_GROUP,payload:{s_name:"new subject",g_name:"new group",day:"Monday",st:"12:00",ft:"14:00",color:"purple",p_name:"new teacher"}})).toEqual(newState)
    })
})

describe('reducer', () => {
    it('should delete a group', () => {
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

        const newState = {
            groups:
                [
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
        expect(groupsReducer(initialState, {type:types.DELETE_GROUP,payload:0})).toEqual(newState)
    })
})

describe('reducer', () => {
    it('should delete a group by name', () => {
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

        const newState = {
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
                    {s_name:"Tools of sw projects",g_name:"G1",day:"Tuesday",st:"10:00",ft:"12:00",color:"lightpink",p_name: "Gera Zoltán"}
                ]
        }
        expect(groupsReducer(initialState, {type:types.DELETE_GROUP_BY_LABEL,payload:["Intro to ML","G1"]})).toEqual(newState)
    })
})

