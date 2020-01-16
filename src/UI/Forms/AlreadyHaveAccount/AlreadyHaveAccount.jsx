import React from "react";
import "./AlreadyHaveAccount.scss";

const AlreadyHaveAccount = () => {
  return (
    <div className="form-have-acc">
      <div className="form-have-acc__heading">
        <h2>Already a Movtic Member?</h2>
        <p>Sign in to earn points and make booking easier!</p>
      </div>

      <button className="form-have-acc__button">
        <i className="fas fa-user-alt"></i>
        <span>Sign In</span>
      </button>
    </div>
  );
};

export default AlreadyHaveAccount;
