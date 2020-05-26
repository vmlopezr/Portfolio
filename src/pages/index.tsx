import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./home/Home";
import Projects from "./projects/Projects";
import CVPage from "./cvpage/CVPage";

export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/cv" component={CVPage} />
    </Switch>
  </HashRouter>
);
