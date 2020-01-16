// @ts-nocheck
import React, { useState } from "react";
import "./MovieShedule.scss";
import {
  MovieSheduleHero,
  MovieSheduleParams,
  MovieSheduleContent,
  MovieSheduleModal
} from "./components";
const MovieShedule = ({ history }) => {
  const [showModal, setShowModal] = useState(false);
  const seatsGrid = [
    // [1, 1, 1],
    // [1, 1]

    [1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 1, 1]
  ];
  const seatsChoosedHandler = () => {
    setShowModal(false);
    history.push("/summary");
  };

  return (
    <section className="movie-shedule">
      <MovieSheduleHero />
      <MovieSheduleParams />
      <MovieSheduleContent rowClicked={() => setShowModal(true)} />
      <MovieSheduleModal
        seatsGrid={seatsGrid}
        showModal={showModal}
        submit={seatsChoosedHandler}
        modalClosed={() => setShowModal(false)}
      />
    </section>
  );
};

export default MovieShedule;
