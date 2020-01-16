import React from "react";
import "./Container.scss";

const Container = ({ className, children }) => {
  className = "container " + className;

  return <div className={className}>{children}</div>;
};

export default Container;
