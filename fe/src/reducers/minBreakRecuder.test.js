
import * as types from "../actions/types";
import minBreakReducer from "./minBreakReducer";

describe('reducer', () => {
    it('should initialize the minbreak object', () => {
        const initialState = {
            value: 0,
            isEnabled:false
        }
        expect(minBreakReducer(undefined, {})).toEqual(initialState)
    })
})

describe('reducer', () => {
    it('should set minbreak option', () => {
        const initialState = {
            value: 0,
            isEnabled:false
        }

        const newState = {
            value: 30,
            isEnabled:true
        }

        expect(minBreakReducer(initialState, {type:types.SET_MIN_BREAK,payload:{value:30,isEnabled:true}})).toEqual(newState)
    })
})



