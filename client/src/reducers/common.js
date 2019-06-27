import axios from 'axios';
import { ERROR } from '../constants';

const apiUrl = 'http://localhost:8000/api';

export default (state = {}, action) => {
  switch (action.type) {
    case ERROR:
      console.error('from store:', action.error);
      return state;
    default:
      return {};
  }
};

export const request = {
  get: (path, query = {}) => axios.get(
    `${apiUrl}${path}`,
  ),
  post: (path, body = {}) => axios.post(
    `${apiUrl}${path}`,
    body,
  ),
};
