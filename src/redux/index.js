import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { moviesReducer } from "app/pages/Main/routes/Movies/routes/MoviesHome/duck";
import { movieReducer } from "app/pages/Main/routes/Movies/routes/MovieDetail/duck";
import ReduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))

export default store