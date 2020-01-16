// @ts-nocheck
import React from "react";
import "./Details.scss";
import { Container } from "layouts";
import { MovieData, MovieInfo, MovieTrailerDesktop } from "./components";

const Details = ({data}) => {
  return (
    <div className="movie__details">
      <Container>
        <MovieTrailerDesktop />
        <MovieInfo title={data.title} genres={data.genres} />
        <MovieData />
      </Container>
    </div>
  );
};

export default Details;
