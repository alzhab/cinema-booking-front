import React from "react";
import { Route, Switch } from "react-router-dom";
import "./Movies.scss";
import {
  MovieDetail,
  MoviesHome,
  MovieShedule
} from "app/pages/Main/routes/Movies/routes";

const Movies = props => {
  return (
    <Switch>
      <Route exact path={props.match.path} component={MoviesHome} />
      <Route exact path={props.match.path + "/:id"} component={MovieDetail} />
      <Route
        exact
        path={props.match.path + "/:id/shedule"}
        component={MovieShedule}
      />
    </Switch>
  );
};

export default Movies;
