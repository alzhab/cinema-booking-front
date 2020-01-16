import React from "react";
import "./Row.scss";
import ScrollContainer from "react-indiana-drag-scroll";

const Row = ({ ticketClicked }) => {
  return (
    <div className="movie-shedule__row row">
      <div className="row__cinema-name">
        <i className="far fa-heart"></i>
        <h3>GENESIS CINEMA</h3>
        <i className="fas fa-map-marker-alt"></i>
      </div>
      <ScrollContainer className="row__cinema-times">
        <div className="row__time" onClick={ticketClicked}>
          <span>09:40</span>
        </div>

        <div className="row__time" onClick={ticketClicked}>
          <span>09:40</span>
        </div>

        <div className="row__time" onClick={ticketClicked}>
          <span>09:40</span>
        </div>

        <div className="row__time" onClick={ticketClicked}>
          <span>09:40</span>
        </div>

        <div className="row__time" onClick={ticketClicked}>
          <span>09:40</span>
        </div>

        <div className="row__time" onClick={ticketClicked}>
          <span>09:40</span>
        </div>

        <div className="row__time" onClick={ticketClicked}>
          <span>09:40</span>
        </div>

        <div className="row__time" onClick={ticketClicked}>
          <span>09:40</span>
        </div>

        <div className="row__time" onClick={ticketClicked}>
          <span>09:40</span>
        </div>

        <div className="row__time" onClick={ticketClicked}>
          <span>09:40</span>
        </div>
      </ScrollContainer>
    </div>
  );
};

export default Row;
