import React from "react";
import { withRouter } from "react-router-dom";
import "./Cafe.scss";
import { CafeHeading, CafeFilters, CafeFoodGrid } from "./components";

const Cafe = () => {
  return (
    <div className="summary__cafe summary-cafe">
      <CafeHeading />
      <CafeFilters />
      <CafeFoodGrid />
    </div>
  );
};

export default withRouter(Cafe);
