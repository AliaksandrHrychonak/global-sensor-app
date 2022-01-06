import {
  CHECK_USER,
  FEEDBACK_FORM_LOADING,
  FEEDBACK_FORM_SUBMIT_ERR,
  FEEDBACK_FORM_SUBMIT_SUCCESS,
  LOGIN_FAIL
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