import { GET_NEWS_FAIL, GET_NEWS } from '../actions/types';

const initialState = {
  allNews: [],
  loading: true,
};

const news = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_NEWS:
      return {
        allNews: payload,
        loading: false,
      };
    case GET_NEWS_FAIL:
      return {
        allNews: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default news;
