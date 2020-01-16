// @ts-nocheck
import React from "react";
import "./Info.scss";
import { Buttons, SocialList } from "UI";

const Info = ({ title, genres }) => {
  return (
    <div className="movie__info movie-info">
      <h2>{title}</h2>
      <div className="movie-info__genres">
        {genres &&
          genres.map(genre => {
            return (
              <Buttons.Default
                key={genre}
                bordered
                className="movie-info__genre"
              >
                {genre}
              </Buttons.Default>
            );
          })}
      </div>
      <div className="movie-info__footer">
        <div className="movie-info__dates">
          <p className="movie-info__date">
            <i className="fas fa-calendar-alt"></i>
            <span>06 dec, 2019</span>
          </p>

          <p className="movie-info__date">
            <i className="fas fa-clock"></i>
            <span>2 hrs 50 mins</span>
          </p>
        </div>

        <SocialList withoutBorder />
      </div>
    </div>
  );
};

export default Info;
