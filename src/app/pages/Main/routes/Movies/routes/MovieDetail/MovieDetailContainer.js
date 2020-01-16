import { connect } from 'react-redux';
import MovieDetail from './MovieDetail';
import { movieOptions } from 'app/pages/Main/routes/Movies/routes/MovieDetail/duck';

const mapStateToProps = (state) => {
  const { movie, isLoading, err } = state.movie
  return { movie, isLoading, err }
};

const mapDispatchToProps = (dispatch) => {
  return {
    movieFetch: (id) => dispatch(movieOptions.movieFetch(id)),
    
  };
};

const MovieDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);

export default MovieDetailContainer;