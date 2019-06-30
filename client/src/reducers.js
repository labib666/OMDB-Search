import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import auth from './reducers/auth';
import common from './reducers/common';
import movies from './reducers/movies';

export default (history) => combineReducers({
  auth,
  common,
  movies,
  router: connectRouter(history),
});
