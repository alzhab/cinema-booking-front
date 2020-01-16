import React from "react";
import { Forms } from "UI";
import { Input } from "UI/Forms/components";
import "./Data.scss";
import Form from "UI/Forms/Search/Components/Form/Form";

const Data = () => {
  return (
    <div className="summary-data">
      <Forms.AlreadyHaveAccount />

      <Forms.Default
        title="Share your Contact Details"
        submitted={() => {}}
        buttonTitle="continue"
      >
        <Input placeholder="Full Name" />
        <Input placeholder="Enter your Mail" />
        <Input placeholder="Enter you Phone Number" />
      </Forms.Default>

      <Forms.Default
        title="Promo Code"
        submitted={() => {}}
        buttonTitle="verify"
      >
        <Input placeholder="Plese enter promo code" />
      </Forms.Default>

      <Forms.PaymentOption />
    </div>
  );
};

export default Data;
