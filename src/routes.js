import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import App from "./App";

export default (
  <Switch>
    <Route path="/admin" component={Admin} />
    <Route path="/" component={App} />
  </Switch>
);