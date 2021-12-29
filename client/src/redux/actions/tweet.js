import api from '../../utils/api';
import store from '../configureStore';

import {
  GET_ALL_TWEETS,
  GET_ALL_TWEETS_FAIL,
  CREATE_TWEET,
  CREATE_COMMENT,
  ADD_LIKE,
  DISLIKE_TWEET,
} from '../actions/types';

import { setAlert } from '../actions/alert';

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
    dispatch(
      setAlert('Please reload the page something went wrong', 'warning')
    );
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
  } catch (error) {
    dispatch(
      setAlert('Sorry could not create a tweet, please try again', 'danger')
    );
  }
};

// @route    PUT /tweet/comment
// @desc     CREATE A COMMENT
// @access   Private
export const createComment = (formData) => async (dispatch) => {
  try {
    const res = await api.put('tweet/comment', formData);
    dispatch({
      type: CREATE_COMMENT,
      payload: res.data,
    });
    dispatch(getAllTweets());
  } catch (error) {
    dispatch(
      setAlert('Sorry could not add comment, please try again', 'danger')
    );
  }
};

// @route    PUT /tweet/like
// @desc     ADD A LIKE
// @access   Private
export const addLike = (formData) => async (dispatch) => {
  try {
    const res = await api.put('tweet/like', formData);
    dispatch({
      type: ADD_LIKE,
      payload: res.data,
    });
    dispatch(getAllTweets());
  } catch (error) {
    // dispatch(
    //   setAlert('Sorry could not add comment, please try again', 'danger')
    // );
  }
};

// @route    PUT /tweet/dislike
// @desc     ADD A LIKE
// @access   Private
export const disLikeTweet = (formData) => async (dispatch) => {
  try {
    const res = await api.put('tweet/dislike', formData);
    dispatch({
      type: DISLIKE_TWEET,
      payload: res.data,
    });
    dispatch(getAllTweets());
  } catch (error) {
    // dispatch(
    //   setAlert('Sorry could not add comment, please try again', 'danger')
    // );
  }
};
