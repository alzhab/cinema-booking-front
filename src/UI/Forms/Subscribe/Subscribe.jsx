// @ts-nocheck
import React from "react";
import "./Subscribe.scss";
import { Buttons } from "UI";

const Subscribe = ({ className }) => {
  className += " subscribe-form";

  return (
    <form className={className}>
      <p>subscrirbe to movtic</p>
      <h2>to get exclusive benefits</h2>

      <div className="subscribe-form__input-box">
        <input type="text" placeholder="Your Emaill Adress " />
        <Buttons.Default className="subscribe-form__button">
          subscribe
        </Buttons.Default>
      </div>

      <span>We respert your privacy, so we never share your info</span>
    </form>
  );
};

export default Subscribe;
