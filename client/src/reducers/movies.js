import { MOVIES } from '../constants';

const initialState = {
  movies: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIES:
      let { movies = [] } = action;
      return {
        ...state,
        movies,
      };
    default:
      return state;
  }
};
