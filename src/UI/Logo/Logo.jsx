import React from "react";
import "./Logo.scss";

const Logo = ({ className }) => {
  className += " logo";

  return (
    <div className={className}>
      <img src="" alt="" />
      <p>
        mov
        <span>tic</span>
      </p>
    </div>
  );
};

export default Logo;
