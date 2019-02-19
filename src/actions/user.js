import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../constants/user';

export const login = (name, password) => dispatch => {
  dispatch({
    type: LOGIN_REQUEST,
  });

  if (name === 'admin' && password === '123') {
    dispatch(success(name));
  } else {
    dispatch(fail());
  }
};
export const success = name => ({ type: LOGIN_SUCCESS, name });
export const fail = () => ({ type: LOGIN_FAIL, error: true });

export const logout = () => ({ type: LOGOUT });
