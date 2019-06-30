import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers';

const getMiddlewares = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(thunk);
  } else {
    return applyMiddleware(thunk, logger);
  }
}

const store = createStore(reducers, getMiddlewares());
export default store;
