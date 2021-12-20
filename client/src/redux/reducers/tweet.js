import {
  GET_ALL_TWEETS,
  GET_ALL_TWEETS_FAIL,
  ALL_USER_LOADED,
  ALL_USER_FAILED,
} from '../actions/types';

const initialState = {
  tweets: [],
  allUsers: [],
  loading: true,
  loadingUsers: true,
};

const tweets = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_TWEETS:
      return {
        ...state,
        tweets: payload,
        loading: false,
      };
    case GET_ALL_TWEETS_FAIL:
      return {
        ...state,
        tweets: [],
        loading: false,
      };
    case ALL_USER_LOADED:
      return {
        ...state,
        allUsers: payload,
        loadingUsers: false,
      };
    case ALL_USER_FAILED:
      return {
        ...state,
        allUsers: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default tweets;
