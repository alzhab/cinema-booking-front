import React from "react";
import "./Summary.scss";
import { SummaryHero, SummaryMenu } from "./components";
import { Container } from "layouts";
import { Payment } from "./routes";
import { Switch, Route } from "react-router-dom";

const Summary = ({ match, history }) => {
  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <section className="summary">
      <SummaryHero />
      <SummaryMenu backClicked={goBackHandler} />
      <Container className="summary__container">
        <Switch>
          <Route path={match.path} component={Payment} />
        </Switch>
      </Container>
    </section>
  );
};

export default Summary;
