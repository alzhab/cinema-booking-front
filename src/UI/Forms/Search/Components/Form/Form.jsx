// @ts-nocheck
import React from "react";
import "./Form.scss";
import { Input, Dropdown } from "UI/Forms/components";

const Form = () => {
  return (
    <div className="search__form search-form">
      <form>
        <div className="search-form__input-box">
          <Input placeholder="Search for Movies" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <Dropdown
          className="search-form__dropdown"
          list={["London", "Almaty", "Astana", "Karaganda"]}
          label="city"
        />
        <Dropdown
          className="search-form__dropdown"
          list={["London", "Almaty", "Astana", "Karaganda"]}
          label="date"
        />
        <Dropdown
          className="search-form__dropdown"
          list={["London", "Almaty", "Astana", "Karaganda"]}
          label="awaken"
        />
      </form>
    </div>
  );
};

export default Form;
