import React from "react";
import "./Offer.scss";

const Offer = ({ name, text, className }) => {
  return (
    <div className={`offer ${className}`}>
      <div className="offer__icon"></div>

      <p>{name}</p>
      <span>{text}</span>
    </div>
  );
};

export default Offer;
