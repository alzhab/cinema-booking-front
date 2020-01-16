// @ts-nocheck
import React from "react";
import "./Navbar.scss";

import { NavLink } from "react-router-dom";

const Navbar = ({ className, links }) => {
  className += " navbar";

  return (
    <nav className={className}>
      <ul>
        {links.map(link => {
          return (
            <li key={link.title}>
              <NavLink to={link.path} activeClassName="navbar__link--active">
                {link.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
