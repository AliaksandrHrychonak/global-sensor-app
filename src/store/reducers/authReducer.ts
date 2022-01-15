import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CHECK_USER,
  AUTH_LOADING,
  UPDATE_USER_FORM_SUCCESS,
} from '../actions/types'

const initialState = {
  isLoading: null,
  isLoggedIn: false,
  user: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: { type: any; payload: any }) {
  const { type, payload } = action

  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: payload.user,
      }
    case REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: payload.user,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        user: null,
      }
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        user: null,
      }
    case CHECK_USER:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: { ...state, ...payload },
      }
    case UPDATE_USER_FORM_SUCCESS:
      return {
        ...state,
        user: { ...payload },
      }
    default:
      return state
  }
}
