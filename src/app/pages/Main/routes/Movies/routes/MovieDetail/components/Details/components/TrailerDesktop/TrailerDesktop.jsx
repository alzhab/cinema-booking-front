// @ts-nocheck
import React from "react";
import "./TrailerDesktop.scss";
import { Buttons } from "UI";

const TrailerDesktop = () => {
  return (
    <div className="movie__trailer--mobile movie-trailer">
      <div className="movie-trailer__video">
        <i className="fas fa-play-circle"></i>
        <img
          src="http://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg"
          alt=""
        />
      </div>

      <div className="movie-trailer__tags">
        <Buttons.Default className="movie-trailer__tag" bordered>
          2d
        </Buttons.Default>
        <Buttons.Default className="movie-trailer__tag" bordered>
          imax 2d
        </Buttons.Default>
        <Buttons.Default className="movie-trailer__tag" bordered>
          4dx
        </Buttons.Default>
      </div>
    </div>
  );
};

export default TrailerDesktop;
