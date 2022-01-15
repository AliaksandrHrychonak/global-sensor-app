import {
  FEEDBACK_FORM_LOADING,
  FEEDBACK_FORM_SUBMIT_ERR,
  FEEDBACK_FORM_SUBMIT_SUCCESS,
  UPDATE_USER_FORM_ERR,
  UPDATE_USER_FORM_LOADING,
  UPDATE_USER_FORM_SUCCESS,
} from "../actions/types";

const initialUser = {
  feedbackForm: {
    isLoading: false,
    isSubmit: false,
    isSubmitError: false,
  },
  updateUserForm: {
    isLoading: false,
    isSubmit: false,
    isSubmitError: false,
  }
}

export default function a (state = initialUser, action: { type: any; payload: any; }) {
  const { type } = action;

  switch (type) {
    case FEEDBACK_FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        feedbackForm: {
          isLoading: false,
          isSubmit: true,
          isSubmitError: false,
        }
      };
    case FEEDBACK_FORM_SUBMIT_ERR:
      return {
        ...state,
        feedbackForm: {
          isLoading: false,
          isSubmit: true,
          isSubmitError: true,
        }
      };
    case FEEDBACK_FORM_LOADING:
      return {
        ...state,
        feedbackForm: {
          isLoading: true,
          isSubmitError: false,
        }
      };
      case UPDATE_USER_FORM_SUCCESS:
      return {
        ...state,
        updateUserForm: {
          isLoading: false,
          isSubmit: true,
          isSubmitError: false,
        }
      };
    case UPDATE_USER_FORM_ERR:
      return {
        ...state,
        updateUserForm: {
          isLoading: false,
          isSubmit: true,
          isSubmitError: true,
        }
      };
    case UPDATE_USER_FORM_LOADING:
      return {
        ...state,
        updateUserForm: {
          isLoading: true,
          isSubmitError: false,
        }
      };
    default:
      return state;
  }
}
