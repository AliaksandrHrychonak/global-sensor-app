import {
  CHECK_USER,
  FEEDBACK_FORM_LOADING,
  FEEDBACK_FORM_SUBMIT_ERR,
  FEEDBACK_FORM_SUBMIT_SUCCESS,
  LOGIN_FAIL,
  UPDATE_USER_FORM_ERR,
  UPDATE_USER_FORM_LOADING,
  UPDATE_USER_FORM_SUCCESS
} from "./types";

import UserService from "../../services/UserService";

export const contactFeedback = (fullname: any, email: any, message: any) => (dispatch: any) => {
  dispatch({
    type: FEEDBACK_FORM_LOADING,
  })
  return UserService.feedbackContactForm(fullname, email, message)
  .then(() => {
    dispatch({
      type: FEEDBACK_FORM_SUBMIT_SUCCESS,
    })
  })
  .catch(() => {
    dispatch({
      type: FEEDBACK_FORM_SUBMIT_ERR,
    })
  })
};

export const getUserMe = () => async (dispatch: any) => {
  return UserService.getUserMe()
  .then((data) => {
    dispatch({
      type: CHECK_USER,
      payload: data
    })
  })
  .catch((err) => {
    dispatch({
      type: LOGIN_FAIL,
      payload: err
    });
  })
}

export const updateUserMe = (name: string, surname: string) => async (dispatch: any) => {
  dispatch({
    type: UPDATE_USER_FORM_LOADING,
  })
  return UserService.updateUser(name, surname)
  .then((data) => {
    dispatch({
      type: UPDATE_USER_FORM_SUCCESS,
      payload: data
    })
  })
  .catch((err) => {
    dispatch({
      type: UPDATE_USER_FORM_ERR,
    });
  })
}

export const updateUserMeAvatar = (avatar: any) => async (dispatch: any) => {
  dispatch({
    type: UPDATE_USER_FORM_LOADING,
  })
  return UserService.updateAvatar(avatar)
  .then((data) => {
    dispatch({
      type: UPDATE_USER_FORM_SUCCESS,
      payload: data
    })
  })
  .catch((err) => {
    dispatch({
      type: UPDATE_USER_FORM_ERR,
    });
  })
}