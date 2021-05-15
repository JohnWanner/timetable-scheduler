import * as types from "./types";
import * as actions from "./profPrefActions";

describe('actions', () => {
    it('should create an action to rearrange the prof pref list', () => {
        const payload = ["p1","p2"]
        const expectedAction = {
            type: types.REARRANGE_PROF,
            payload
        }
        expect(actions.rearrangeProf(["p1","p2"])).toEqual(expectedAction)
    })
})

describe('actions', () => {
    it('should create an action to set the prof pref list', () => {
        const payload = "false"
        const expectedAction = {
            type: types.SET_PROF_PREF,
            payload
        }
        expect(actions.setProfPref("false")).toEqual(expectedAction)
    })
})