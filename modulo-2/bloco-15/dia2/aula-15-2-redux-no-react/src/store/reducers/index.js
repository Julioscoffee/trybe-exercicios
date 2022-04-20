import { combineReducers } from 'redux';
import { SELECT_MOVIE_TYPE, SEARCH_MOVIE_TYPE } from '../actions';

const INITIAL_STATE = {
  selectedCategory: {},
  selectedMovie: {},
  searchedMovie: '',
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_MOVIE_TYPE:
      return {
        ...state,
        selectedCategory: action.category,
        selectedMovie: action.movie,
      };
    case SEARCH_MOVIE_TYPE:
      return {
        ...state,
        searchedMovie: action.movieSearched,
      };
    default:
      return state;
  };
};

const rootReducer = combineReducers({
  movieReducer,
});

export default rootReducer;
