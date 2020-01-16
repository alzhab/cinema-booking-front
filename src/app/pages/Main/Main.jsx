import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Header, Footer } from "layouts";
import { Movies, Summary } from "./routes";

const Main = props => {
  const mainPath = props.match.path;

  const links = [
    { title: "movies", path: `${mainPath}movies` },
    { title: "events", path: `${mainPath}events` },
    { title: "sports", path: `${mainPath}sports` },
    { title: "pages", path: `${mainPath}pages` },
    { title: "blog", path: `${mainPath}blog` },
    { title: "contact", path: `${mainPath}contact` }
  ];

  return (
    <main>
      <Header links={links} />

      <Switch>
        <Route path={`/movies`} component={Movies} />
        <Route path={`/summary`} component={Summary} />
        {/* Пока Home не готов, перенаправдять будет на Movies */}
        <Route render={() => <Redirect to="/movies" />} />
      </Switch>

      <Footer />
    </main>
  );
};

export default Main;
