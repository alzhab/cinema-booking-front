import React from "react";
import "./Modal.scss";

const Modal = ({ children, className }) => {
  return <div className={`modal ${className}`}>{children}</div>;
};

export default Modal;
