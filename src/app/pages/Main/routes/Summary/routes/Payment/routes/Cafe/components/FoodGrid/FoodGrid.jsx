import React from "react";
import "./FoodGrid.scss";
import { Cards } from "UI";

const FoodGrid = () => {
  return (
    <div className="summary-cafe__food-grid">
      <Cards.Food />
      <Cards.Food />
      <Cards.Food />
      <Cards.Food />
    </div>
  );
};

export default FoodGrid;
