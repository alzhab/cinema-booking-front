// @ts-nocheck
import React from "react";
import { Aside } from "layouts";
import { Offer } from "./components";
import ScrollContainer from "react-indiana-drag-scroll";
import "./Aside.scss";

const MovieAside = () => {
  return (
    <Aside title="Applicable Offers" className="movie__aside">
      <ScrollContainer className="movie__offers-list">
        <Offer
          name="Amazon Pay Cashback Offer"
          text="lWn Cashback upa Rs 3"
          className="movie__offer"
        />

        <Offer
          name="Amazon Pay Cashback Offer"
          text="lWn Cashback upa Rs 3"
          className="movie__offer"
        />

        <Offer
          name="Amazon Pay Cashback Offer"
          text="lWn Cashback upa Rs 3"
          className="movie__offer"
        />
      </ScrollContainer>
    </Aside>
  );
};

export default MovieAside;
