import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import tweet from './tweet';

const rootReducer = combineReducers({
  alert,
  auth,
  tweet,
});

export default rootReducer;
