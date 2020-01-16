import React from "react";
import { Aside } from "layouts";
import ScrollContainer from "react-indiana-drag-scroll";
import { Forms } from "UI";
import "./Aside.scss";

const MoviesHomeAside = ({ genres, genreClicked, clearGenres }) => {
  const checkboxFormList = [
    {
      heading: "genres",
      checkboxList: [
        ...genres.map(genre => {
          return {
            ...genre,
            onChange: () => {
              genreClicked({
                ...genre,
                checked: !genre.checked
              });
            }
          };
        })
      ]
    }
  ];

  return (
    <Aside
      className="movies-home__aside"
      title="Filter by"
      titleButton={{
        title: "clear all",
        clicked: () => {
          clearGenres();
        }
      }}
    >
      <ScrollContainer className="movies-home__filters scroll-container">
        {checkboxFormList &&
          checkboxFormList.map(form => {
            return (
              <Forms.CheckboxForm
                key={form.heading}
                className="movies-home__checkbox-form"
                heading={form.heading}
                list={form.checkboxList}
              />
            );
          })}
      </ScrollContainer>
    </Aside>
  );
};

export default MoviesHomeAside;
