import React from "react";
import "./Sort.scss";
import { Dropdown } from "UI/Forms/components";

const Sort = () => {
  return (
    <div className="sort">
      <Dropdown
        label="Show:"
        className="sort__dropdown sort__dropdown--mini sort__dropdown--bottom-space"
        list={[12, 4, 1]}
        withoutIcon
      />

      <Dropdown
        label="Sort by:"
        className="sort__dropdown"
        list={["Not Showing", "Comming", "New"]}
        withoutIcon
      />
    </div>
  );
};

export default Sort;
