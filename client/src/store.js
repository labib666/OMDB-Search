import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'
import { createStore, compose, applyMiddleware } from 'redux';

import createRootReducer from './reducers';

export const history = createBrowserHistory();

const requiredMiddlewares = [
  thunk,
  routerMiddleware(history),
];

const devMiddlewares = [
  logger,
];

const getMiddlewares = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(...requiredMiddlewares);
  } else {
    return applyMiddleware(...requiredMiddlewares, ...devMiddlewares);
  }
}

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      getMiddlewares(),
    ),
  )

  return store;
}
