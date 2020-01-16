import React from "react";
import "./Default.scss";

const Default = ({
  className,
  children,
  bordered,
  clicked,
  shadow,
  circle,
  ...res
}) => {
  className = "button--default " + className;
  if (bordered) {
    className += " button--bordered";
  }
  if (shadow) {
    className += " button--shadow";
  }

  if (circle) {
    className += " button--circle";
  }

  return (
    <button {...res} className={className} onClick={clicked}>
      {children}
    </button>
  );
};

export default Default;
