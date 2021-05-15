import * as types from "./types";
import * as actions from "./noClassActions";

describe('actions', () => {
    it('should create an action to add no class item', () => {
        const payload = {name:"name",day:"Tuesday",st:"13:30",ft:"17:00"}
        const expectedAction = {
            type: types.ADD_ITEM,
            payload
        }
        expect(actions.addItem({name:"name",day:"Tuesday",st:"13:30",ft:"17:00"})).toEqual(expectedAction)
    })
})

describe('actions', () => {
    it('should create an action to delete no class item', () => {
        const payload = {name:"name",day:"Tuesday",st:"13:30",ft:"17:00"}
        const expectedAction = {
            type: types.DELETE_ITEM,
            payload
        }
        expect(actions.deleteItem({name:"name",day:"Tuesday",st:"13:30",ft:"17:00"})).toEqual(expectedAction)
    })
})

describe('actions', () => {
    it('should create an action to enable or disable the no class option', () => {
        const payload = true
        const expectedAction = {
            type: types.SET_NO_CLASS,
            payload
        }
        expect(actions.setNoClass(true)).toEqual(expectedAction)
    })
})

