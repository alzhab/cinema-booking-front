import React, { useState } from "react";
import "./Dropdown.scss";
import OutsideClickHandler from "react-outside-click-handler";

const Dropdown = ({ list, label, className, withoutIcon }) => {
  const [activeOption, setActiveOption] = useState(list[0]);
  const [optionsShow, setOptionsShow] = useState(false);

  list = list.filter(option => option !== activeOption);

  const toggleOptions = e => {
    e.stopPropagation();
    setOptionsShow(prev => !prev);
  };

  const optionSelectHandler = (e, value) => {
    e.stopPropagation();
    setActiveOption(value);
    setOptionsShow(false);
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setOptionsShow(false);
      }}
    >
      <div
        className={`dropdown ${className}`}
        onClick={e => {
          toggleOptions(e);
        }}
      >
        <div className="dropdown__label">
          {!withoutIcon && <span></span>}
          <p>{label}</p>
        </div>
        <div className="dropdown__select">
          <p>{activeOption}</p>
          {optionsShow && (
            <ul className="dropdown__options">
              {list.map((option, index) => {
                return (
                  <li onClick={e => optionSelectHandler(e, option)} key={index}>
                    {option}
                  </li>
                );
              })}
            </ul>
          )}
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Dropdown;
