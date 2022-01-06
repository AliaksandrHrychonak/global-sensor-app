import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_LOADING
} from "./types";

import AuthService from "../../services/AuthService";

export const registration = (name: string, surname: string, email: any, password: any) => (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
  dispatch({
    type: AUTH_LOADING,
  })
  return AuthService.register(name, surname, email, password)
  .then((data: any) => {
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

export const login = (email: any, password: any) => (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
  dispatch({
    type: AUTH_LOADING,
  })
  return AuthService.login(email, password)
  .then((data: any) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    });
  })
  .catch((err) => {
    console.log(err);
    dispatch({
      type: LOGIN_FAIL,
    });
    return Promise.reject();
  })
};

export const logout = () => (dispatch: any) => {
  dispatch({
    type: AUTH_LOADING,
  })
  AuthService.logout()
  .then(()=> {
    dispatch({
      type: LOGOUT,
    });
  })
  .catch(() => {
    dispatch({
      type: LOGOUT,
    });
  })
};

export const googleLogin = () => (dispatch: any) => {
  AuthService.loginGoogle()
  .then((data)=> {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
};

export const refreshToken = () => (dispatch: any) => {
  dispatch({
    type: AUTH_LOADING,
  })
  return AuthService.refresh()
  .then((data) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    });
  })
  .catch((err) => {
    console.log(err);
    dispatch({
      type: LOGIN_FAIL,
    });
  })
}