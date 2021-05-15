import { SET_USER, LOADING } from "../actions/types";

const isEmpty = require("is-empty");



const initialState = {
  loading: false,
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, act) {
  switch (act.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(act.payload),
        user: act.payload
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
