// @ts-nocheck
import React from "react";
import "./Content.scss";
import { Forms, Cards, Loader } from "UI";

const Content = ({ cardClicked, list, isLoading }) => {
  const content = isLoading ? (
    <Loader />
  ) : (
    list &&
    list.map(movie => {
      return (
        <Cards.Default
          key={movie.id}
          onClick={() => cardClicked(movie.id)}
          className="movies-home__card"
          data={movie}
        />
      );
    })
  );

  return (
    <div className="movies-home__content">
      <Forms.Sort />

      <div className="movies-home__movies-list">{content}</div>
    </div>
  );
};

export default Content;
