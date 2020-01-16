// @ts-nocheck
import React from "react";
import "./Footer.scss";
import Container from "layouts/Container/Container";
import { Logo, SocialList, Forms } from "UI";

const Footer = () => {
  

  return (
    <footer className="footer">
      <Container className="footer__container">
        <Forms.Subscribe className="footer__subscribe-form" />
        <div className="footer__links">
          <Logo className="footer__logo" />
          <SocialList className="footer__social-list" />
        </div>
        <div className="footer__copyright">
          <p>Copyright 2019.All Rights Reserved By Movtic</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
