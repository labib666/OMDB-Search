import axios from 'axios';
import { ERROR } from '../constants';

const apiUrl = 'http://localhost:8000/api';

export default (state = {}, action) => {
  switch (action.type) {
    case ERROR:
      console.error('error:', action.error);
      return state;
    default:
      return {};
  }
};

export const request = {
  get: (path, query = undefined, token = undefined) => {
    const url = `${apiUrl}${path}`;
    const config = {
      ...(
        !!query
        && { query }
      ),
      ...(
        !!token 
        && {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      ),
    };
    console.log('get', path, token, config);
    return axios.get(
      url, config,
    ).then(res => res.data);
  },
  post: (path, body = {}, token = undefined) => {
    const url = `${apiUrl}${path}`;
    const config = {
      ...(
        !!token 
        && {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      ),
    };
    console.log('post', path, token, body, config);
    return axios.post(
      url, body, config,
    ).then(res => res.data);
  }
};
