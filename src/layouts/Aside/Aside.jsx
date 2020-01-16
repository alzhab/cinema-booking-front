import React from "react";
import "./Aside.scss";

const Aside = ({ children, className, title, titleButton }) => {
  return (
    <aside className={`aside ${className}`}>
      <div className="aside__heading">
        <h2>{title}</h2>
        {titleButton && (
          <span onClick={titleButton.clicked}>{titleButton.title}</span>
        )}
      </div>
      {children}
    </aside>
  );
};

export default Aside;
