import {REARRANGE_PROF, SET_PROF_PREF} from "../actions/types";
import profPrefReducer from "./profPrefReducer";

describe('reducer', () => {
    it('should trigger enabled for profpref', () => {
        const initialState = {
            list:[],
            isEnabled:false
        }
        const expected = {
            list:[],
            isEnabled:true
        }
        expect(profPrefReducer(initialState,{
            type:SET_PROF_PREF,
            payload: true
        })).toEqual(expected)
    })
})
describe('reducer', () => {
    it('should initialize the profpref object', () => {
        const initialState = {
            list:[],
            isEnabled:false
        }
        expect(profPrefReducer(undefined, {})).toEqual(initialState)
    })
})
describe('reducer', () => {
    it('should rearrange the profpref object', () => {
        const newState = {
            list:["p2","p1"],
            isEnabled:true
        }
        const initialState = {
            list:["p1","p2"],
            isEnabled:true
        }
        expect(profPrefReducer(initialState, {type:REARRANGE_PROF,payload:["p2","p1"]})).toEqual(newState)
    })
})

