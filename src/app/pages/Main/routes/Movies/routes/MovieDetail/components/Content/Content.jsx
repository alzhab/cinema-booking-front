// @ts-nocheck
import React, { useState } from "react";
import { MoviePhotos, MovieNavigation } from "./components";
import {
  Reviews,
  Summary
} from "app/pages/Main/routes/Movies/routes/MovieDetail/routes";

const Content = ({ synopsis }) => {
  const [activeLink, setActiveLink] = useState("summary");
  const switchRoute =
    activeLink === "summary" ? (
      <Summary synopsis={synopsis} />
    ) : (
      <Reviews />
    );

  return (
    <div className="movie__content">
      <MoviePhotos />
      <MovieNavigation clicked={setActiveLink} activeLink={activeLink} />

      {switchRoute}
    </div>
  );
};

export default Content;
