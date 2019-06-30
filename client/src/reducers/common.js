import { ERROR } from '../constants';
import { toast } from 'react-toastify';

export default (state = {}, action) => {
  switch (action.type) {
    case ERROR:
      console.error('error:', action.error);
      toast.error(action.error.response.data.message);
      return state;
    default:
      return {};
  }
};
