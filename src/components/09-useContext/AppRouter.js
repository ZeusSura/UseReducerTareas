import React from "react";
import {Switch, Route} from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import TodoApp  from '../../components/08-useReducer/TodoApp'
const AppRouter = () => {
  return (
    <React.Fragment>
      <div>
        <Switch>
          <Route exact={true} path={["/","/login"]} component={LoginPage} />
          <Route exact={true} path="/about" component={AboutPage} />
          <Route exact={true} path="/Home" component={HomePage} />
          <Route exact={true} path="/Tareas" component={TodoApp} />
        </Switch>
        
      </div>
    </React.Fragment>
  );
};

export default AppRouter;
