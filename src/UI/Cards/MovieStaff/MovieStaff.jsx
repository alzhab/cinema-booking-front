import React from "react";
import "./MovieStaff.scss";

const MovieStaff = ({ className }) => {
  return (
    <div className={`card-movie-staff ${className}`}>
      <div className="card-movie-staff__img"></div>
      <h3>bill hader</h3>
      <p>actor</p>
      <span>As Richie Tozier</span>
    </div>
  );
};

export default MovieStaff;
