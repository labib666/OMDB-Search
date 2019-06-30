import { LOGIN, LOGOUT } from '../constants';

const initialState = {
  token: '',
  user: {
    id: '',
    username: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      const { user, token } = action.data;
      localStorage.setItem('token', token);
      return {
        ...state,
        token,
        user,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return initialState;
    default:
      return state;
  }
};
