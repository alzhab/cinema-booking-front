// @ts-nocheck
import React from "react";
import "./Header.scss";
import { Logo, Navbar, Buttons } from "UI";
import { Container } from "layouts";
import ScrollContainer from "react-indiana-drag-scroll";
const Header = ({ links }) => {
  return (
    <header className="header">
      <Container className="header__container">
        <Logo className="header__logo" />

        <ScrollContainer className="header__navbar scroll-container">
          <Navbar links={links} />
        </ScrollContainer>

        <Buttons.Default className="header__button">join us</Buttons.Default>
      </Container>
    </header>
  );
};

export default Header;
