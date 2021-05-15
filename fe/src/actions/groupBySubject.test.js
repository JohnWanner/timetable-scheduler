import * as types from './types'
import * as actions from './groupBySubject'

describe('actions', () => {
    it('should create an action to enable group by subject', () => {
        const payload = [[{s_name:"SUB1",g_name:"G1"},{s_name:"SUB2",g_name:"G1"}],[{s_name:"SUB1",g_name:"G2"},{s_name:"SUB2",g_name:"G1"}]];
        const expectedAction = {
            type: types.SET_GROUP_BY_SUBJECT,
            payload
        }
        let sending = [[{s_name:"SUB1",g_name:"G1"},{s_name:"SUB2",g_name:"G1"}],[{s_name:"SUB1",g_name:"G2"},{s_name:"SUB2",g_name:"G1"}]];
        expect(actions.setGroupBySubject(sending)).toEqual(expectedAction)
    })
})
