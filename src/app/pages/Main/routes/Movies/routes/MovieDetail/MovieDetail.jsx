// @ts-nocheck
import React, { useEffect } from "react";
import "./MovieDetail.scss";
import {
  MovieHero,
  MovieDetails,
  MovieAside,
  MovieContent
} from "./components";
import { Container } from "layouts";
import { Loader } from "UI";

const MovieDetail = props => {
  useEffect(() => {
    props.movieFetch(props.match.params.id);
  }, []);

  return (
    <section className="movie">
      {props.isLoading ? (
        <div
          style={{
            height: "100vh"
          }}
        >
          <Loader />
        </div>
      ) : (
        <React.Fragment>
          <MovieHero />
          <MovieDetails data={props.movie} />

          <Container className="movie__container">
            <MovieAside />

            <MovieContent synopsis={props.movie.synopsis} />
          </Container>
        </React.Fragment>
      )}
    </section>
  );
};

export default MovieDetail;
