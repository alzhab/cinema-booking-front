import React from "react";
import "./Backpack.scss";

const Backpack = ({ clicked }) => {
  return <div className="backpack" onClick={clicked}></div>;
};

export default Backpack;
