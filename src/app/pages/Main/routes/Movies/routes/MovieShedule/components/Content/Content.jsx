import React from "react";
import { Container } from "layouts";
import { MovieSheduleRow } from "./components";
import "./Content.scss";

const Content = ({ rowClicked }) => {
  return (
    <Container className="movie-shedule__content">
      <MovieSheduleRow ticketClicked={rowClicked} />
      <MovieSheduleRow ticketClicked={rowClicked} />
      <MovieSheduleRow ticketClicked={rowClicked} />
      <MovieSheduleRow ticketClicked={rowClicked} />
      <MovieSheduleRow ticketClicked={rowClicked} />
      <MovieSheduleRow ticketClicked={rowClicked} />
    </Container>
  );
};

export default Content;
