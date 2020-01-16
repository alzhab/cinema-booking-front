import { moviesActions } from "app/pages/Main/routes/Movies/routes/MoviesHome/duck";
import apiInstance from "instances/api";

const moviesFetch = () => {
  return dispatch => {
    dispatch(moviesActions.moviesFetchStart())
    apiInstance.get('movies.json').then(res => {
      setTimeout(() => {
        dispatch(moviesActions.moviesFetchSuccess(res.data))
      }, 1500)
    }).catch(err => {
      dispatch(moviesActions.moviesFetchError(err.message))
    })
  }
}

const moviesOptions = {
  moviesFetch
}

export default moviesOptions