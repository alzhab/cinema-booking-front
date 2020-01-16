import React from "react";
import "./PaymentOption.scss";
import { PaymentType } from "UI/Forms/components";

const PaymentOption = () => {
  return (
    <div className="form-payment-option">
      <h2>Payment Option</h2>

      <div className="form-payment-option__payment-types">
        <PaymentType
          active
          className="form-payment-option__payment-type"
          title="credit card"
        />

        <PaymentType
          active={false}
          className="form-payment-option__payment-type"
          title="debit card"
        />
      </div>

      
      
    </div>
  );
};

export default PaymentOption;
