import * as types from './types'
import * as actions from './generatedList'

describe('actions', () => {
    it('should create an action to set generated list of timetables', () => {
        const payload = [[{s_name:"SUB1",g_name:"G1"},{s_name:"SUB2",g_name:"G1"}],[{s_name:"SUB1",g_name:"G2"},{s_name:"SUB2",g_name:"G1"}]];
        const expectedAction = {
            type: types.SET_GENERATED_LIST,
            payload
        }
        let sending = [[{s_name:"SUB1",g_name:"G1"},{s_name:"SUB2",g_name:"G1"}],[{s_name:"SUB1",g_name:"G2"},{s_name:"SUB2",g_name:"G1"}]];
        expect(actions.setGeneratedList(sending)).toEqual(expectedAction)
    })
})