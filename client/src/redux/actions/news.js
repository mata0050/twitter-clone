import axios from 'axios';
import { GET_NEWS, GET_NEWS_FAIL } from './types';

export const getAllNews = () => async (dispatch) => {
  try {
    // dotenv the key
    const res = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://newsdata.io/api/1/news?apikey=pub_2945c46c381d92d811903c639caa3223ec62',
      {
        headers: {
          // 'X-ACCESS-KEY': 'pub_2945c46c381d92d811903c639caa3223ec62',
          // 'Access-Control-Allow-Origin': 'http://localhost:3000/',
          // 'Access-Control-Request-Method': 'GET',
          // 'Access-Control-Request-Headers': 'Origin, X-ACCESS-KEY, Accept',
          // 'Origin': 'http://localhost:3000',
          // 'Referrer-Policy': 'strict-origin-when-cross-origin'
        },
      }
    );
    console.log(res);

    dispatch({
      type: GET_NEWS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_NEWS_FAIL,
      payload: err,
    });
  }
};
