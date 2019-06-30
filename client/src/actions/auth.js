import { request } from '../reducers/common';

import {
    ERROR,
    LOGIN,
    LOGOUT,
} from '../constants';

function signup(username, email, password) {
  return (dispatch, getState) => {
    request.post('/public/signup', {
      username,
      email,
      password,
    }).catch(error => {
      dispatch ({
        error,
        type: ERROR,
      });
    });
  }
};

function login(username, password) {
  return (dispatch, getState) => {
    request.post('/public/login', {
      username,
      password,
    }).then(data => {
      dispatch({
        data: {
          user: data.user,
          token: data.token,
        },
        type: LOGIN,
      });
    }).catch(error => {
      dispatch ({
        error,
        type: ERROR,
      });
    });
  }
};

function logout(token) {
  return (dispatch, getState) => {
    dispatch({
      type: LOGOUT,
    });
    request.post('/v1/user/logout', null, token).then(data => {
      console.log('logout complete')
    })
    .catch(error => {
      console.error('error: ', error);
      dispatch({
        error,
        type: ERROR,
      });
    });
  }
}

function getUser(token) {
  return (dispatch, getState) => {
    request.get('/v1/user', null, token).then(data => {
      dispatch({
        data: {
          token,
          user: data.user,
        },
        type: LOGIN,
      });
    }).catch(error => {
      console.error('error: ', error);
      dispatch(logout(token));
    });
  }
};

export default {
  signup,
  login,
  logout,
  getUser,
}
