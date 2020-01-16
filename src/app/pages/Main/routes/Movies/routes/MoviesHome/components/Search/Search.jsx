import React from "react";
import { Container } from "layouts";
import { Forms } from "UI";
import "./Search.scss";

const Search = () => {
  return (
    <Container className="movies-home__top-container">
      <Forms.Search className="movies-home__search" activeButton="movies" />
    </Container>
  );
};

export default Search;
