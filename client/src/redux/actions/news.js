import axios from 'axios';
import { GET_NEWS, GET_NEWS_FAIL } from './types';

export const getAllNews = () => async (dispatch) => {
  try {
    // dotenv the key
    const res = await axios.get('/news/latest');

    if (res.data.status === 'error') {
    return dispatch({
        type: GET_NEWS_FAIL,
      });
    }
      dispatch({
        type: GET_NEWS,
        payload: res.data.results,
      });
    

    console.log(res.data)

  } catch (err) {
    dispatch({
      type: GET_NEWS_FAIL,
      payload: err,
    });
  }
};
