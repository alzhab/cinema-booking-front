import React from "react";
import { Cards } from "UI";
import "./Reviews.scss";

const Reviews = () => {
  return (
    <div>
      <Cards.Comment className="review__comment"></Cards.Comment>
      <Cards.Comment className="review__comment"></Cards.Comment>
      <Cards.Comment className="review__comment"></Cards.Comment>
      <Cards.Comment className="review__comment"></Cards.Comment>
    </div>
  );
};

export default Reviews;
