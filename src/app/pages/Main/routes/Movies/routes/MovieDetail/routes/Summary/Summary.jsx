// @ts-nocheck
import React from "react";
import "./Summary.scss";
import ScrollContainer from "react-indiana-drag-scroll";
import { Cards } from "UI";

const Summary = ({ synopsis }) => {
  return (
    <div className="movie__summary summary">
      <div className="summary__synopsis">
        <h2>synopsis</h2>
        <p>{synopsis}</p>
      </div>

      <div className="summary__block">
        <h2>cast</h2>
        <ScrollContainer className="summary__block-list scroll-container">
          <Cards.MovieStaff className="summary__card"></Cards.MovieStaff>
          <Cards.MovieStaff className="summary__card"></Cards.MovieStaff>
          <Cards.MovieStaff className="summary__card"></Cards.MovieStaff>
          <Cards.MovieStaff className="summary__card"></Cards.MovieStaff>
          <Cards.MovieStaff className="summary__card"></Cards.MovieStaff>
          <Cards.MovieStaff className="summary__card"></Cards.MovieStaff>
          <Cards.MovieStaff className="summary__card"></Cards.MovieStaff>
          <Cards.MovieStaff className="summary__card"></Cards.MovieStaff>
        </ScrollContainer>
      </div>

      <div className="summary__block">
        <h2>crew</h2>
        <ScrollContainer className="summary__block-list scroll-container">
          <Cards.MovieStaff className="summary__card"></Cards.MovieStaff>
          <Cards.MovieStaff className="summary__card"></Cards.MovieStaff>
          <Cards.MovieStaff className="summary__card"></Cards.MovieStaff>
          <Cards.MovieStaff className="summary__card"></Cards.MovieStaff>
          <Cards.MovieStaff className="summary__card"></Cards.MovieStaff>
          <Cards.MovieStaff className="summary__card"></Cards.MovieStaff>
          <Cards.MovieStaff className="summary__card"></Cards.MovieStaff>
          <Cards.MovieStaff className="summary__card"></Cards.MovieStaff>
        </ScrollContainer>
      </div>
    </div>
  );
};

export default Summary;
