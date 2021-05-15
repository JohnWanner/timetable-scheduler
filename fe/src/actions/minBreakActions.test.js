import * as types from "./types";
import * as actions from "./minBreakActions";

describe('actions', () => {
    it('should create an action to set minimum break', () => {
        const payload = {
            value:10,
            isEnabled:true
        }
        const expectedAction = {
            type: types.SET_MIN_BREAK,
            payload
        }
        expect(actions.setMinBreak(10,true)).toEqual(expectedAction)
    })
})