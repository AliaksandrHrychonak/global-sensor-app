import {
  FEEDBACK_FORM_LOADING,
  FEEDBACK_FORM_SUBMIT_ERR,
  FEEDBACK_FORM_SUBMIT_SUCCESS
} from "../actions/types";

const initialUser = {
  feedbackForm: {
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
    default:
      return state;
  }
}
