import { request } from './common';
import { push } from 'connected-react-router';

import {
  ERROR,
  MOVIES,
} from '../constants';

function getUserMovies(token) {
  return (dispatch, getState) => {
    request.get('/v1/user/movies', token).then(data => {
      dispatch({
        movies: data.movies,
        type: MOVIES,
      })
    }).catch(error => {
      dispatch({
        error,
        type: ERROR,
      })
    });
  }
}

export default {
  getUserMovies,
}
