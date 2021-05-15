import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_LIST_OF_ERRORS, SET_USER, LOADING } from "./types";


// USER REGISTER
export const register = (data, record) => dispatch => {
  axios
    .post("/api/users/register", data)
    .then(res => record.push("/login"))
    .catch(e =>
      dispatch({
        type: GET_LIST_OF_ERRORS,
        payload: e.response.data
      })
    );
};

// USER LOGIN
export const loginUser = data => dispatch => {
  axios
    .post("/api/users/login", data)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      dispatch(setUser(jwt_decode(token)));
    })
    .catch(e =>
      dispatch({
        type: GET_LIST_OF_ERRORS,
        payload: e.response.data
      })
    );
};

// LOGGED IN
export const setUser = dec => {
  return {
    type: SET_USER,
    payload: dec
  };
};

// LOADING
export const setUserLoading = () => {
  return {
    type: LOADING
  };
};

// LOG OUT
export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setUser({}));
};
