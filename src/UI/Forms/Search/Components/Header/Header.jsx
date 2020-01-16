// @ts-nocheck
import React from "react";
import "./Header.scss";
import { Buttons } from "UI";

const Header = ({ activeButton }) => {
  const buttonslist = [
    {
      text: "movies"
    },
    {
      text: "events"
    },
    {
      text: "sports"
    }
  ];

  return (
    <div className="search__header">
      <div className="search__heading">
        <p>welcome to movtic</p>
        <h2>what are you looking for</h2>
      </div>

      <div className="search__buttons">
        {buttonslist.map(button => {
          return (
            <Buttons.Default
              key={button.text}
              className={`search__button ${
                activeButton === button.text ? "search__button--active" : null
              }`}
            >
              {button.text}
            </Buttons.Default>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
