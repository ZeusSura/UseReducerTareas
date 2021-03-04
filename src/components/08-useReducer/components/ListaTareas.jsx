import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Assignment } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
const ListaTareas = ({ todos }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {todos.map((tarea) => (
        <ListItem key={tarea.id}>
          <ListItemAvatar>
            <Avatar>
              <Assignment />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={tarea.desc} secondary="Fecha del item" />
        </ListItem>
      ))}
    </List>
  );
};

export default ListaTareas;
