import * as types from "../actions/types";
//const types = require("../actions/types");
import subjectsReducer from "./subjectsReducer";
//const subjectsReducer = require("./subjectsReducer");
let initialState = require("./testObjects");
let addSubjectNewState = require("./AddSubjectNewState");
let deleteSubjectByIndex = require("./deleteSubjectByIndex");
let deleteSubjectMyName = require("./deleteSubjectByName");

describe('reducer', () => {
    it('should initialize the subjects object', () => {
        expect(subjectsReducer(undefined, {})).toEqual({
            subjects: []
        })
    })
})

describe('reducer', () => {
    it('should add a subject', () => {
        expect(subjectsReducer(initialState, {type:types.ADD_SUBJECT,payload:"new_subject"})).toEqual(addSubjectNewState)
    })
})

describe('reducer', () => {
    it('should delete a subject by index', () => {
        expect(subjectsReducer(initialState, {type:types.DELETE_SUBJECT,payload:1})).toEqual(deleteSubjectByIndex)
    })
})

describe('reducer', () => {
    it('should delete a subject by name', () => {
        expect(subjectsReducer(initialState, {type:types.DELETE_SUBJECT_BY_NAME,payload:"Analysis II L"})).toEqual(deleteSubjectMyName)
    })
})
