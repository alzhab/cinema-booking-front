// @ts-nocheck
import React from "react";
import "./SeatsGrid.scss";
import Seat from "UI/Seat/Seat";

const SeatsGrid = ({ grid }) => {
  return (
    <div className="seats-grid">
      {grid.map((row, index) => {
        return (
          <div className="seats-grid__row" key={index}>
            {row.map((seat, index) => {
              if (seat) {
                return <Seat key={index} className="seats-grid__seat" />;
              } else {
                return <span key={index} className="seats-grid__space"></span>;
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default SeatsGrid;
