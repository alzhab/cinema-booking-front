// @ts-nocheck
import React from "react";
import "./Default.scss";
import { Buttons } from "UI";

const Default = ({ children, title, submitted, buttonTitle }) => {
  const submitHandler = e => {
    e.preventDefault();
    submitted();
  };

  return (
    <div className="form-default">
      <h2>{title}</h2>
      <form onSubmit={e => submitHandler(e)}>
        {children}
        <div>
          <Buttons.Default>{buttonTitle}</Buttons.Default>
        </div>
      </form>
    </div>
  );
};

export default Default;
