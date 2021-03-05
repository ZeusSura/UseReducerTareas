import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact={true} path={["/","/login"]} component={LoginPage} />
          <Route exact={true} path="/about" component={AboutPage} />
          <Route exact={true} path="/Home" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
