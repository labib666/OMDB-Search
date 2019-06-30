import axios from 'axios';

const apiUrl = 'http://localhost:8000/api';

export const request = {
  get: (path, query = undefined, token = undefined) => {
    const url = `${apiUrl}${path}${query}`;
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
    return axios.post(
      url, body, config,
    ).then(res => res.data);
  }
};
