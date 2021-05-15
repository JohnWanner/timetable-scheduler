import * as types from "./types";
import * as actions from "./groupsActions";

describe('actions', () => {
    it('should create an action to add a group', () => {
        const payload = {s_name:"Analysis II L",g_name:"G1",day:"Thursday",st:"17:30",ft:"19:30",color:"lightsalmon",p_name: "Csörgő István"}
        const expectedAction = {
            type: types.ADD_GROUP,
            payload
        }
        expect(actions.addGroup({s_name:"Analysis II L",g_name:"G1",day:"Thursday",st:"17:30",ft:"19:30",color:"lightsalmon",p_name: "Csörgő István"})).toEqual(expectedAction)
    })
})

describe('actions', () => {
    it('should create an action to delete a group', () => {
        const payload = 1
        const expectedAction = {
            type: types.DELETE_GROUP,
            payload
        }
        expect(actions.deleteGroup(1)).toEqual(expectedAction)
    })
})

describe('actions', () => {
    it('should create an action to delete a group based on label', () => {
        const subject_name = "Subject"
        const group_name = "Group"
        const expectedAction = {
            type: types.DELETE_GROUP_BY_LABEL,
            payload:[subject_name,group_name]
        }
        expect(actions.deleteGroupByLabel("Subject","Group")).toEqual(expectedAction)
    })
})

