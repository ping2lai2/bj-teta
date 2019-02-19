import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../constants/user';

const initialState = {
  name: '',
  error: false,
  isFetching: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
  case LOGIN_REQUEST:
    return { ...state, isFetching: true, error: false };

  case LOGIN_SUCCESS:
    return { ...state, isFetching: false, name: action.name };

  case LOGIN_FAIL:
    return { ...state, isFetching: false, error: action.message };
  case LOGOUT:
    return { ...initialState };

  default:
    return state;
  }
}
