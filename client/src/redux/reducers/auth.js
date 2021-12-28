import api from '../../utils/api';
import {
  REGISTER_USER_FAILED,
  REGISTER_USER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  LOGIN_USER,
  LOGIN_USER_FAILED,
  UPDATE_USER_PROFILE
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null,
  username: null,
  uerId: null,
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
        username: payload.username,
        userId: payload._id,
        loading: false,
      };
    case REGISTER_USER_SUCCESS:
    case LOGIN_USER:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        payload,
        isAuthenticated: true,
        loading: false,
      };
    case UPDATE_USER_PROFILE:
      return{
        ...state,
        loading: false
      }
    // case ACCOUNT_DELETED:
    case LOGOUT:
    case LOGIN_USER_FAILED:
    case REGISTER_USER_FAILED:
   case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        username: null,
        userId: null,
      };

    default:
      return state;
  }
};

export default auth;
