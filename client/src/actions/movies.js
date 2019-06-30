import { request } from './common';
import { push } from 'connected-react-router';

import {
  ERROR,
  MOVIES,
  USER_MOVIES,
} from '../constants';

function getSearchedMovies(searched) {
  return (dispatch, getState) => {
    let { token } = getState().auth;
    if (!token) token = localStorage.getItem('token');
    request.get('/v1/movies', `?s=${searched}`, token).then(data => {
      dispatch({
        movies: data.movies,
        type: MOVIES,
      })
      dispatch(push('/movies'));
    }).catch(error => {
      dispatch({
        error,
        type: ERROR,
      })
    });
  }
}

function getUserMovies() {
  return (dispatch, getState) => {
    let { token } = getState().auth;
    if (!token) token = localStorage.getItem('token');
    request.get('/v1/user/movies', null, token).then(data => {
      dispatch({
        movies: data.movies,
        type: USER_MOVIES,
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
  getSearchedMovies,
  getUserMovies,
}
