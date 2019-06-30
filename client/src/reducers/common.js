import { ERROR } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case ERROR:
      console.error('error:', action.error);
      return state;
    default:
      return {};
  }
};
