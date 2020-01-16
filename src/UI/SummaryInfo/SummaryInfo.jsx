// @ts-nocheck
import React from "react";
import "./SummaryInfo.scss";

// Element Components
import SummaryItem from "./components/SummaryItem";

// UI COMPONENTS
import { Buttons } from "UI";

const SummaryInfo = ({ className, proceed }) => {
  return (
    <div className={`summary-info ${className}`}>
      <div className="summary-info__body">
        <h2 className="summary-info__heading">booking summary</h2>

        <SummaryItem
          mainText={{ left: "venus" }}
          secondText={{ left: "english-2d" }}
        />

        <SummaryItem
          mainText={{ left: "venus", right: "02" }}
          secondText={{ left: "10 sep tue, 11:00 pm", right: "tickets" }}
        />

        <SummaryItem
          mainText={{ left: "Tickets price", right: "150" }}
          secondText={{ left: "10 sep tue, 11:00 pm", right: "tickets" }}
        />

        <div className="summary-info__hr summary-info__hr--circles" />

        <SummaryItem
          mainText={{ left: "combos", right: "$57" }}
          secondText={{ left: "2 nachos combo" }}
        />

        <SummaryItem
          mainText={{ left: "Food & beverage", right: "$57" }}
          secondText={{}}
        />

        <div className="summary-info__hr" />

        <SummaryItem
          mainText={{}}
          secondText={{ left: "price", right: "$207" }}
        />
        <SummaryItem mainText={{}} secondText={{ left: "vat", right: "$15" }} />
      </div>
      <div className="summary-info__footer">
        <SummaryItem
          mainText={{ left: "amount payable", right: "$222" }}
          secondText={{}}
        />

        <Buttons.Default clicked={proceed}>proceed</Buttons.Default>
      </div>
    </div>
  );
};

export default SummaryInfo;
