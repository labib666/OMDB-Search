import { request } from './common';
import { push } from 'connected-react-router';

import {
  ERROR,
  MOVIES,
} from '../constants';

function getUserMovies() {
  return (dispatch, getState) => {
    let { token } = getState().auth;
    if (!token) token = localStorage.getItem('token');
    request.get('/v1/user/movies', null, token).then(data => {
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
