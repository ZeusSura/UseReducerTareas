import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  title:{
    flexGrow:1
  }
}));
const NavBar = () => {
  const classes = useStyle();
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar  className={classes.root}>
          <Typography variant="h6" className={classes.title} color="inherit" >Aplicación Multi Task</Typography>
          <Button component={Link} to="/Home" color="inherit">
            Inicio
          </Button>
          <Button component={Link} to="/about" color="inherit">
            About
          </Button>
          <Button component={Link} to="/Tareas" color="inherit">
            Tareas
          </Button>
          <Button component={Link} to="/" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
};

export default NavBar;
