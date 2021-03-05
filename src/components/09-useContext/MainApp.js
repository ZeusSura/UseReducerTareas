import React from "react";
import AppRouter from "./AppRouter";
import NavBar from "./NavBar";
import { BrowserRouter as Router} from 'react-router-dom'
const MainApp = () => {
  return (
    <Router>
      <NavBar /> 
      <AppRouter />
    </Router>
  );
};

export default MainApp;
