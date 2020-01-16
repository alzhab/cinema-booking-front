// @ts-nocheck
import React from "react";
import "./Params.scss";
import { Forms } from "UI";
import { Dropdown } from "UI/Forms/components";
import { Container } from "layouts";

const Params = () => {
  return (
    <div className="movie-shedule-params">
      <Container className="movie-shedule-params__container">
        <div className="movie-shedule-params__dropdown">
          <Dropdown list={["london"]} label="CITY" />
        </div>

        <div className="movie-shedule-params__dropdown">
          <Dropdown list={["london"]} label="CITY" />
        </div>

        <div className="movie-shedule-params__dropdown">
          <Dropdown list={["london"]} label="CITY" />
        </div>

        <div className="movie-shedule-params__dropdown">
          <Dropdown list={["london"]} label="CITY" />
        </div>
      </Container>
    </div>
  );
};

export default Params;
