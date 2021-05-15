import * as types from "./types";
import * as actions from "./subjectsActions";

describe('actions', () => {
    it('should create an action to add a subject', () => {
        const payload = "Subject_name"
        const expectedAction = {
            type: types.ADD_SUBJECT,
            payload
        }
        expect(actions.addSubject("Subject_name")).toEqual(expectedAction)
    })
})

describe('actions', () => {
    it('should create an action to delete a subject by index', () => {
        const payload = 1
        const expectedAction = {
            type: types.DELETE_SUBJECT,
            payload
        }
        expect(actions.deleteSubject(1)).toEqual(expectedAction)
    })
})

describe('actions', () => {
    it('should create an action to delete a subject by name', () => {
        const payload = "subject_name"
        const expectedAction = {
            type: types.DELETE_SUBJECT_BY_NAME,
            payload
        }
        expect(actions.deleteSubjectByName("subject_name")).toEqual(expectedAction)
    })
})