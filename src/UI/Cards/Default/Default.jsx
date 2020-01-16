// @ts-nocheck
import React from "react";
import "./Default.scss";
import Buttons from "UI/Buttons";

const Default = ({ className, flag, onClick, data }) => {
  return (
    <div className={`card card--default ${className}`}>
      {flag && (
        <span className="card__flag">
          <p>28</p>
          <span>dec</span>
        </span>
      )}

      <div className="card__img">
        <img
          src="http://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg"
          alt=""
        />
      </div>

      <div className="card__info">
        <h2 className="card__title">{data.title}</h2>

        <div className="card__footer">
          <p>
            <span role="img" aria-label="tomato">
              &#127813;
            </span>{" "}
            88%
          </p>
          <p>
            <span role="img" aria-label="popcorn">
              {" "}
              &#127871;
            </span>{" "}
            88%
          </p>
        </div>
      </div>

      <div className="card__details">
        <Buttons.Default clicked={onClick} className="card__button">
          Details
        </Buttons.Default>
      </div>
    </div>
  );
};

export default Default;
