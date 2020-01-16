import { moviesTypes } from "app/pages/Main/routes/Movies/routes/MoviesHome/duck"

const initialState = {
  isLoading: false,
  movies: [],
  genres: [],
  error: '',
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case moviesTypes.MOVIES_FETCH_START:
      return {
        ...state,
        isLoading: true,
        movies: [],
        genres: [],
        error: ''
      }
    case moviesTypes.MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
        genres: action.genres,
        error: ''
      }
    case moviesTypes.MOVIES_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        movies: [],
        genres: [],
        error: action.payload
      }
    case moviesTypes.MOVIES_GENRES_CHANGED:
      const newGenres = state.genres.map(genre => {
        if (action.payload.title === genre.title) {
          genre.checked = action.payload.checked
        }
        return genre
      })

      return {
        ...state,
        genres: newGenres
      }
    case moviesTypes.MOVIES_CLEAR_ALL_GENRES:
      return {
        ...state,
        genres: state.genres.map((genre) => {
          return {
            ...genre,
            checked: false
          }
        })
      }
    default:
      return initialState
  }
}

export default moviesReducer