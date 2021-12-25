import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import tweet from './tweet';
import news from './news';

const rootReducer = combineReducers({
  alert,
  auth,
  tweet,
  news,
});

export default rootReducer;
