// @ts-nocheck
import React, { useState } from "react";
import "./Filters.scss";
import { Buttons } from "UI";

const Filters = () => {
  const [choosedFilter, setChoosedFilter] = useState("all");

  return (
    <div className="summary-cafe__filters">
      <Buttons.Default
        className="summary-cafe__filter"
        bordered={choosedFilter !== "all"}
        clicked={() => setChoosedFilter("all")}
      >
        all
      </Buttons.Default>
      <Buttons.Default
        className="summary-cafe__filter"
        bordered={choosedFilter !== "combos"}
        clicked={() => setChoosedFilter("combos")}
      >
        combos
      </Buttons.Default>
      <Buttons.Default
        className="summary-cafe__filter"
        bordered={choosedFilter !== "beverages"}
        clicked={() => setChoosedFilter("beverages")}
      >
        beverages
      </Buttons.Default>
      <Buttons.Default
        className="summary-cafe__filter"
        bordered={choosedFilter !== "popcorn"}
        clicked={() => setChoosedFilter("popcorn")}
      >
        popcorn
      </Buttons.Default>
    </div>
  );
};

export default Filters;
