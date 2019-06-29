import { request } from '../reducers/common';

import {
    LOGIN,
    ERROR,
} from '../constants';

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
      console.error('error: ', error);
      dispatch ({
        error,
        type: ERROR,
      });
    });
  }
};

export default {
  login,
}
