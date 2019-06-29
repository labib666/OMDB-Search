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
      return {
        ...state,
        token,
        user,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
