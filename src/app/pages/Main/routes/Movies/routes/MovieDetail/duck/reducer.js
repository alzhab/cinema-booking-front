import movieTypes from "./types"

const initialState = {
  isLoading: false,
  movie: {},
  error: '',
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case movieTypes.MOVIE_FETCH_START:
      return {
        ...state,
        isLoading: true,
        movie: [],
        error: ''
      }
    case movieTypes.MOVIE_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movie: action.payload,
        error: ''
      }
    case movieTypes.MOVIE_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        movie: [],
        error: action.payload
      }
    default:
      return initialState
  }
}

export default movieReducer