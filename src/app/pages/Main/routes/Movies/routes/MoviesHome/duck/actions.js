import moviesTypes from "app/pages/Main/routes/Movies/routes/MoviesHome/duck/types"

// MOVIES_FETCH_START,
// MOVIES_FETCH_SUCCESS,
// MOVIES_FETCH_ERROR

// Get genres from movie list
const getGenres = (movies) => {
  let genres = []

  movies.forEach(movie => {
    genres = [...genres, ...movie.genres]
  })

  genres = genres.map(genre => {
    return {
      title: genre,
      checked: false
    }
  })

  return [...new Set(genres)]
}

const moviesFetchStart = () => {
  return {
    type: moviesTypes.MOVIES_FETCH_START
  }
}

const moviesFetchSuccess = (movies) => {
  const genres = getGenres(movies)
  return {
    type: moviesTypes.MOVIES_FETCH_SUCCESS,
    payload: movies,
    genres: genres
  }
}

const moviesFetchError = (error) => {
  return {
    type: moviesTypes.MOVIES_FETCH_ERROR,
    payload: error
  }
}

const moviesGenreChanged = (genre) => {
  return {
    type: moviesTypes.MOVIES_GENRES_CHANGED,
    payload: genre
  }
}

const moviesClearAllGenres = () => {
  return {
    type: moviesTypes.MOVIES_CLEAR_ALL_GENRES
  }
}

const moviesActions = {
  moviesFetchStart,
  moviesFetchSuccess,
  moviesFetchError,
  moviesGenreChanged,
  moviesClearAllGenres
}

export default moviesActions