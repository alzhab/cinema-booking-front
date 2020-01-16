import movieTypes from "./types"

// MOVIES_FETCH_START,
// MOVIES_FETCH_SUCCESS,
// MOVIES_FETCH_ERROR
const movieFetchStart = () => {
  return {
    type: movieTypes.MOVIE_FETCH_START
  }
}

const movieFetchSuccess = (movie) => {
  return {
    type: movieTypes.MOVIE_FETCH_SUCCESS,
    payload: movie
  }
}

const movieFetchError = (error) => {
  return {
    type: movieTypes.MOVIE_FETCH_ERROR,
    payload: error
  }
}

const movieActions = {
  movieFetchStart,
  movieFetchSuccess,
  movieFetchError
}

export default movieActions