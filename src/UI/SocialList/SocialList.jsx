// @ts-nocheck
import React from "react";
import { Buttons } from "UI";
import "./SocialList.scss";

const SocialList = ({ className, withoutBorder }) => {
  const socialLinks = [
    { link: "#", icon: "fab fa-facebook-f" },
    { link: "#", icon: "fab fa-twitter" },
    { link: "#", icon: "fab fa-pinterest-p" },
    { link: "#", icon: "fab fa-google-plus-g" },
    { link: "#", icon: "fab fa-instagram" }
  ];

  className += " social-list";

  return (
    <ul className={className}>
      {socialLinks.map((soc, index) => {
        return (
          <li key={index}>
            <a href={soc.link}>
              <Buttons.Default
                bordered={!withoutBorder}
                circle
                className={`social-list__link ${withoutBorder ? 'social-list__link--none-back' : null}`}
              >
                <i className={soc.icon}></i>
              </Buttons.Default>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialList;
