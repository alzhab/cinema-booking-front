import React from "react";
import { SummaryInfo } from "UI";
import "./Payment.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import { Cafe, Data } from "./routes";

const Payment = ({ match, history }) => {
  return (
    <div className="summary-payment">
      <div className="summary-payment__switch">
        <Switch>
          <Route path={`${match.path}/cafe`} component={Cafe} />
          <Route path={`${match.path}/payment`} component={Data} />

          <Route
            path={match.path}
            render={() => <Redirect to={`${match.path}/cafe`} />}
          />
        </Switch>
      </div>

      <SummaryInfo
        className="summary-payment__info"
        proceed={() => {
          history.push(`${match.path}/payment`);
        }}
      />
    </div>
  );
};

export default Payment;
