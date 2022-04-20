// action type
export const SELECT_MOVIE_TYPE = 'SELECT_MOVIE'
export const SEARCH_MOVIE_TYPE = 'SEARCH_MOVIE'

// action creator
function selectedMovie(movie, category) {
  return {
    type: SELECT_MOVIE_TYPE,
    movie,
    category,
  };
}

function searchMovie(movieSearched) {
  return {
    type: SEARCH_MOVIE_TYPE,
    movieSearched,
  };
}
