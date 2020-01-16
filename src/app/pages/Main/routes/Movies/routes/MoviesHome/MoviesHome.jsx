// @ts-nocheck
import React, { useEffect } from "react";
import "./MoviesHome.scss";
import {
  MoviesHomeHero,
  MoviesHomeSearch,
  MoviesHomeAside,
  MoviesHomeContent
} from "./components";
import { Container } from "layouts";

const MoviesHome = props => {
  const {
    movies,
    isLoading,
    err,
    moviesFetch,
    genres,
    changeGenre,
    clearGenres
  } = props;

  const choosedGenres = genres
    .filter(genre => {
      return genre.checked;
    })
    .map(genre => {
      return genre.title;
    });

  let filteredMovies = movies.filter(movie => {
    return movie.genres.some(r => choosedGenres.indexOf(r) >= 0);
  });

  const goToMovieDetails = id => {
    props.history.push(`${props.match.path}/${id}`);
  };

  useEffect(() => {
    moviesFetch();
  }, []);

  if (!choosedGenres.length) {
    filteredMovies = movies;
  }

  return (
    <section className="movies-home">
      <MoviesHomeHero />

      <MoviesHomeSearch />

      <Container className="movies-home__container">
        <MoviesHomeAside genreClicked={changeGenre} genres={genres} clearGenres={clearGenres}/>

        <MoviesHomeContent
          list={filteredMovies}
          cardClicked={goToMovieDetails}
          isLoading={isLoading}
        />
      </Container>
    </section>
  );
};

export default MoviesHome;
