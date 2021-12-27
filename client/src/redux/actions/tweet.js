import api from '../../utils/api';

import {
  GET_ALL_TWEETS,
  GET_ALL_TWEETS_FAIL,
  CREATE_TWEET,
} from '../actions/types';

import { getAllUsers } from '../actions/auth';

// @route    GET /tweet
// @desc     Get all tweets
// @access   Private

export const getAllTweets = () => async (dispatch) => {
  try {
    const res = await api.get('tweet');

    const orderedTweets = res.data.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

 

    dispatch({
      type: GET_ALL_TWEETS,
      payload: orderedTweets,
    });

    // Gets all the users
    // dispatch(getAllUsers());
  } catch (error) {
    dispatch({
      type: GET_ALL_TWEETS_FAIL,
    });
  }
};

// @route    POST /tweet/new
// @desc     CREATE A TWEET
// @access   Private
export const createTweet = (formData) => async (dispatch) => {
  try {
    const res = await api.post('tweet/new', formData);
    dispatch({
      type: CREATE_TWEET,
      payload: res.data,
    });
    dispatch(getAllTweets());
  } catch (error) {}
};
