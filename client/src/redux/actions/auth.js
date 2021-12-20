import api from '../../utils/api';
import setAuthToken from '../../utils/setAuthToken';

import {
  REGISTER_USER_FAILED,
  REGISTER_USER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  ALL_USER_LOADED,
  ALL_USER_FAILED,
} from './types';

// @route    GET /login
// @desc     Get the user on every page load
// @access   Private
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await api.get('auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// @route    GET /login/all-users
// @desc     Get all the users
// @access   Public
export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await api.get('login/all-users');
    dispatch({
      type: ALL_USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ALL_USER_FAILED,
    });
  }
};

// @route    POST /register
// @desc     Register a User
// @access   Public
export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post('register', formData);
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: REGISTER_USER_FAILED,
    });
  }
};
