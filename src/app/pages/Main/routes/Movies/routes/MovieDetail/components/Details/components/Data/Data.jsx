// @ts-nocheck
import React from "react";
import "./Data.scss";
import { Buttons } from "UI";
import { withRouter } from "react-router-dom";

const Data = ({ match, history }) => {
  const bookTicketsClickedHandler = () => {
    history.push(match.url + "/shedule");
  };

  return (
    <div className="movie__data">
      <ul className="movie__data-list">
        <li>
          <p>
            <span role="img" aria-label="tomato">
              &#127813;
            </span>
            88%
          </p>
          <span>tomatometer</span>
        </li>
        <li>
          <p>
            <span role="img" aria-label="tomato">
              &#127871;
            </span>
            88%
          </p>
          <span>audience score</span>
        </li>
        <li>
          <p>
            <span>4.3</span>
            <i className="fas fa-heart active"></i>
            <i className="fas fa-heart active"></i>
            <i className="fas fa-heart active"></i>
            <i className="fas fa-heart active"></i>
            <i className="fas fa-heart active"></i>
          </p>
          <span>ausers rating</span>
        </li>
        <li>
          <p>
            <i className="fas fa-heart"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-heart"></i>
            <span className="right">0.0</span>
          </p>
          <span>RATE IT</span>
        </li>
      </ul>
      <Buttons.Default
        className="movie__button"
        clicked={bookTicketsClickedHandler}
      >
        BOOK TICKETS
      </Buttons.Default>
    </div>
  );
};

export default withRouter(Data);
