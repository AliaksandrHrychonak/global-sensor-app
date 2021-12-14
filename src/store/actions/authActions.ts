import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  REFRESH_TOKEN,
  LOGIN_SUCCESS
} from "./types";

import AuthService from "../../services/AuthService";
import axios from "axios";
import { API_URL } from "../../http";

export const registration = (email: any, password: any) => (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
  return AuthService.register(email, password)
  .then((data: any) => {
    console.log(data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: data
    });
  })
  .catch((err) => {
    console.log(err);
    dispatch({
      type: REGISTER_FAIL,
    });
    return Promise.reject();
  })
};

export const logout = () => (dispatch: (arg0: { type: string; }) => void) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};

export const refreshToken = (accessToken: any) => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  dispatch({
    type: REFRESH_TOKEN,
    payload: accessToken,
  })
}

export const checkAuth = () => async (dispatch: any) => {
  try {
    const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
    localStorage.setItem('token', response.data.accessToken);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data.user
    })
} catch (e: any) {
    console.log(e.response?.data?.message);
}
}