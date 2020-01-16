import { connect } from 'react-redux';
import MoviesHome from 'app/pages/Main/routes/Movies/routes/MoviesHome/MoviesHome';
import { moviesOptions, moviesActions } from 'app/pages/Main/routes/Movies/routes/MoviesHome/duck';

const mapStateToProps = (state) => {
  const { movies, isLoading, err, genres } = state.movies

  return {
    movies, isLoading, err, genres
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    moviesFetch: () => dispatch(moviesOptions.moviesFetch()),
    changeGenre: (genre) => dispatch(moviesActions.moviesGenreChanged(genre)),
    clearGenres: () => dispatch(moviesActions.moviesClearAllGenres())
  };
};

const MoviesHomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesHome);

export default MoviesHomeContainer;