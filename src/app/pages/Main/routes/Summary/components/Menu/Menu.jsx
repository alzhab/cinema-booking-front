// @ts-nocheck
import React from "react";
import "./Menu.scss";
import { Container } from "layouts";
import { Buttons } from "UI";

const Menu = ({ backClicked }) => {
  return (
    <div className="summary-menu">
      <Container className="summary-menu__container">
        <Buttons.Default
          className="summary-menu__back"
          shadow
          clicked={backClicked}
        >
          <i className="fas fa-chevron-left"></i> Back
        </Buttons.Default>

        <p className="summary-menu__time">mon, sep 09 2019, 13:45</p>

        <div className="summary-menu__time-left">
          <p>05:00</p>
          <span>mins left</span>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
