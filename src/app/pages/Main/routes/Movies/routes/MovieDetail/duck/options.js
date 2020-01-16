import apiInstance from "instances/api";
import movieActions from "./actions";

const movieFetch = (id) => {
  return dispatch => {
    dispatch(movieActions.movieFetchStart())
    apiInstance.get(`movies/${id}.json`).then(res => {
      setTimeout(() => {
        dispatch(movieActions.movieFetchSuccess(res.data))
      }, 1500)
    }).catch(err => {
      dispatch(movieActions.movieFetchError(err.message))
    })
  }
}

const movieOptions = {
  movieFetch
}

export default movieOptions