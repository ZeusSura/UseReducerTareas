import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/LIstItemIcon"
import { Delete, CheckCircleOutline, CancelRounded } from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";
import { IconButton, Box, Typography } from "@material-ui/core";
import moment from "moment";
import "moment/locale/es";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper,
  },

}));

const ListaTareas = ({ todos, handleDelete, handleComplete }) => {
  const classes = useStyles();
  moment.locale("es-mx");
  return (
    <>
      <Typography variant="h5" align="center">Lista de tareas pendientes</Typography>
      <List className={classes.root}>
        {todos.map((tarea) => (
          <Box   key={tarea.id} mt={1}>
   
              <Paper elevation={10}>
                <ListItem button   onClick={() => handleComplete(tarea.id)}  key={tarea.id}>
                  <ListItemIcon
                    key={tarea.id}
                  >
                    {tarea.done ? (
                      <CheckCircleOutline style={{ color: "#b2ff59" }} />
                    ) : (
                      <CancelRounded style={{ color: "#f44336" }} />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={tarea.desc}
                    secondary={moment(tarea.fecha).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  />
                  <IconButton
                    onClick={() => handleDelete(tarea.id)}
                    color="primary"
                  >
                    <Delete style={{ fill: "#f44336" }} />
                  </IconButton>
                </ListItem>
              </Paper>
          </Box>
        ))}
      </List>
    </>
  );
};

export default ListaTareas;
