import React from "react";
import "./PaymentType.scss";

const PaymentType = ({ className, title, active }) => {
  return (
    <div
      className={`payment-type ${className} ${
        active ? "payment-type--active" : null
      }`}
    >
      {active && (
        <span className="payment-type__ok">
          <i className="fas fa-check"></i>
        </span>
      )}

      <div className="payment-card payment-type__payment-card">
        <span className="payment-card__long-line"></span>
        <span className="payment-card__long-line"></span>
        <div className="payment-card__footer">
          <div className="payment-card__small-lines">
            <span className="payment-card__small-line"></span>
            <span className="payment-card__small-line"></span>
          </div>

          <div className="payment-card__round"></div>
        </div>
      </div>

      <p>{title}</p>
    </div>
  );
};

export default PaymentType;
