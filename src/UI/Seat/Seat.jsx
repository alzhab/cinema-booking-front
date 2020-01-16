import React from "react";
import "./Seat.scss";

const Seat = ({ className }) => {
  return (
    <div className={`seat ${className}`}>
      <span></span>
    </div>
  );
};

export default Seat;
