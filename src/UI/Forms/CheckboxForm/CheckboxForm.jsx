import React from "react";
import "./CheckboxForm.scss";
import { Checkbox } from "UI/Forms/components";

const CheckboxForm = ({ list, className, heading }) => {
  return (
    <div className={`checkbox-form ${className}`}>
      <h2>{heading}</h2>

      {list &&
        list.map(checkbox => {
          return (
            <Checkbox
              key={checkbox.title}
              onChange={checkbox.onChange}
              className="checkbox-form__checkbox"
              checked={checkbox.checked}
              title={checkbox.title}
            />
          );
        })}
    </div>
  );
};

export default CheckboxForm;
