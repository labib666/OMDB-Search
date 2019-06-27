import { SIGNUP, LOGIN, LOGOUT } from '../constants';

const initialState = {
  token: '',
  user: {
    id: '',
    email: '',
    username: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...initialState };
    case LOGIN:
      return {
        ...state,
        user: action.data,
      };
    case LOGOUT:
    default:
      return { ...initialState };
  }
};
