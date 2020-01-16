// @ts-nocheck
import React from "react";
import "./Food.scss";
import { Buttons } from "UI";

const Food = () => {
  return (
    <div className="card-food">
      <div className="card-food__price">
        <span>$57</span>
      </div>
      <div className="card-food__discount">
        <span>24%</span>
        <p>off</p>
      </div>
      <div className="card-food__img"></div>
      <div className="card-food__body">
        <h2>Muchaco, Crispy Taco, Bean Burrito</h2>
        <div className="card-food__footer">
          <Buttons.Default>add</Buttons.Default>
        </div>
      </div>
    </div>
  );
};

export default Food;
