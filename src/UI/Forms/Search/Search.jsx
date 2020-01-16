// @ts-nocheck
import React from "react";
import "./Search.scss";
import Header from "UI/Forms/Search/Components/Header/Header";
import Form from "UI/Forms/Search/Components/Form/Form";

const Search = ({ className, activeButton }) => {
  className += " search";

  return (
    <div className={className}>
      <Header activeButton={activeButton} />
      <Form />
    </div>
  );
};

export default Search;
