import { MOVIES, USER_MOVIES } from '../constants';

const initialState = {
  movies: [],
  userMovies: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIES:
      let { movies = [] } = action;
      return {
        ...state,
        movies,
      };
    case USER_MOVIES:
      let { movies: userMovies = [] } = action;
      return {
        ...state,
        userMovies: userMovies,
      };
    default:
      return state;
  }
};
