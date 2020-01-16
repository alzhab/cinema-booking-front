import React from "react";
import "./SummaryItem.scss";

const SummaryItem = ({ mainText, secondText, ...res }) => {
  return (
    <div className="summary-info__item summary-info-item" {...res}>
      <div className="summary-info-item__main-text">
        <h3>{mainText.left}</h3>
        <span>{mainText.right}</span>
      </div>
      <div className="summary-info-item__second-text">
        <span>{secondText.left}</span>
        <span>{secondText.right}</span>
      </div>
    </div>
  );
};

export default SummaryItem;
