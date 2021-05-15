
import * as types from "../actions/types";
import subjectsReducer from "./subjectsReducer";

describe('reducer', () => {
    it('should initialize the subjects object', () => {
        const initialState = {
            subjects:

            []
        }

        expect(subjectsReducer(undefined, {})).toEqual(initialState)
    })
})

describe('reducer', () => {
    it('should add a subject', () => {
        const initialState = {
            subjects:
                [{s_name:"Analysis II L",color:"lightsalmon"},{s_name:"Analysis II P",color:"lightseagreen"},{s_name:"Web Prog L",color:"lightcoral"},{s_name:"Web Prog P",color:"lightblue"},{s_name:"A&D II L",color:"lightcyan"},{s_name:"A&D II P",color:"lightgoldenrodyellow"},{s_name:"App of DM",color:"lightgreen"},{s_name:"Tools of sw projects",color:"lightpink"},{s_name:"Intro to ML",color:"lightskyblue"}]

        }
        const newState = {
            subjects:
                [{s_name:"Analysis II L",color:"lightsalmon"},{s_name:"Analysis II P",color:"lightseagreen"},{s_name:"Web Prog L",color:"lightcoral"},{s_name:"Web Prog P",color:"lightblue"},{s_name:"A&D II L",color:"lightcyan"},{s_name:"A&D II P",color:"lightgoldenrodyellow"},{s_name:"App of DM",color:"lightgreen"},{s_name:"Tools of sw projects",color:"lightpink"},{s_name:"Intro to ML",color:"lightskyblue"},{s_name:"new_subject",color:"NavajoWhite"}]

        }

        expect(subjectsReducer(initialState, {type:types.ADD_SUBJECT,payload:"new_subject"})).toEqual(newState)
    })
})

describe('reducer', () => {
    it('should delete a subject by index', () => {
        const initialState = {
            subjects:
                [{s_name:"Analysis II L",color:"lightsalmon"},{s_name:"Analysis II P",color:"lightseagreen"},{s_name:"Web Prog L",color:"lightcoral"},{s_name:"Web Prog P",color:"lightblue"},{s_name:"A&D II L",color:"lightcyan"},{s_name:"A&D II P",color:"lightgoldenrodyellow"},{s_name:"App of DM",color:"lightgreen"},{s_name:"Tools of sw projects",color:"lightpink"},{s_name:"Intro to ML",color:"lightskyblue"}]

        }
        const newState = {
            subjects:
                [{s_name:"Analysis II L",color:"lightsalmon"},{s_name:"Analysis II P",color:"lightseagreen"},{s_name:"Web Prog L",color:"lightcoral"},{s_name:"Web Prog P",color:"lightblue"},{s_name:"A&D II L",color:"lightcyan"},{s_name:"A&D II P",color:"lightgoldenrodyellow"},{s_name:"App of DM",color:"lightgreen"},{s_name:"Tools of sw projects",color:"lightpink"},{s_name:"Intro to ML",color:"lightskyblue"}]

        }
        expect(subjectsReducer(initialState, {type:types.DELETE_SUBJECT,payload:1})).toEqual(newState)
    })
})

describe('reducer', () => {
    it('should delete a subject by name', () => {
        const initialState = {
            subjects:
                [{s_name:"Analysis II L",color:"lightsalmon"},{s_name:"Analysis II P",color:"lightseagreen"},{s_name:"Web Prog L",color:"lightcoral"},{s_name:"Web Prog P",color:"lightblue"},{s_name:"A&D II L",color:"lightcyan"},{s_name:"A&D II P",color:"lightgoldenrodyellow"},{s_name:"App of DM",color:"lightgreen"},{s_name:"Tools of sw projects",color:"lightpink"},{s_name:"Intro to ML",color:"lightskyblue"}]

        }
        const newState = {
            subjects:
                [{s_name:"Analysis II P",color:"lightseagreen"},{s_name:"Web Prog L",color:"lightcoral"},{s_name:"Web Prog P",color:"lightblue"},{s_name:"A&D II L",color:"lightcyan"},{s_name:"A&D II P",color:"lightgoldenrodyellow"},{s_name:"App of DM",color:"lightgreen"},{s_name:"Tools of sw projects",color:"lightpink"},{s_name:"Intro to ML",color:"lightskyblue"}]

        }
        expect(subjectsReducer(initialState, {type:types.DELETE_SUBJECT_BY_NAME,payload:"Analysis II L"})).toEqual(newState)
    })
})
