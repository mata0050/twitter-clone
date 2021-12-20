import api from '../../utils/api';
import {
  REGISTER_USER_FAILED,
  REGISTER_USER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  LOGIN_FAIL,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null,
  loading: true,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        loading: false,
      };
    case REGISTER_USER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        payload,
        isAuthenticated: true,
        loading: false,
      };
    // case ACCOUNT_DELETED:
    case LOGOUT:
    case AUTH_ERROR:
    case REGISTER_USER_FAILED:
    case LOGIN_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        role: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        id: null,
      };

    default:
      return state;
  }
};

export default auth;
