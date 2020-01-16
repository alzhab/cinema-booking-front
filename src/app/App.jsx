import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "app/pages/Main/Main";

function App() {
  return (
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  );
}

export default App;
