import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

const Navigation = ({ clicked, activeLink }) => {
  return (
    <div className="navigaiton">
      <li
        onClick={() => clicked("summary")}
        className={`${activeLink === "summary" ? "active" : ""}`}
      >
        summary
      </li>

      <li
        onClick={() => clicked("reviews")}
        className={`${activeLink === "reviews" ? "active" : ""}`}
      >
        user reviews
      </li>
    </div>
  );
};

export default Navigation;
