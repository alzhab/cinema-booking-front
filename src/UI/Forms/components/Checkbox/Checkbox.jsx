import React, { useState } from "react";
import "./Checkbox.scss";

const Checkbox = ({ checked, onChange, className, title }) => {
  return (
    <div className={`checkbox ${className}`} onClick={onChange}>
      <input
        type="checkbox"
        name="tamil"
        id=""
        checked={checked}
        onChange={() => {}}
      />
      <label htmlFor="tamil">{title}</label>
    </div>
  );
};

export default Checkbox;
