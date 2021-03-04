import { Grid, Box, Container, Snackbar,Typography } from "@material-ui/core";
import React, { useReducer, useState, useEffect } from "react";
import ListaTareas from "./components/ListaTareas";
import todoReducer from "./todoReducer";
import MuiAlert from "@material-ui/lab/Alert";
import Formulario from "./components/Formulario";

const init = () => {
  return JSON.parse(localStorage.getItem("tareas")) || [];
};

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const TodoApp = () => {
  const [open, setopen] = useState(false);
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(todos));
  }, [todos]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setopen(false);
  };

  const handleDelete = (id) => {
    const action = {
      type: "Delete",
      payload: id,
    };
    dispatch(action);
  };
  const handleComplete = (id) => {
    const action = {
      type: "Complete",
      payload: id,
    };
    dispatch(action);
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          Por favor rellena el formulario
        </Alert>
      </Snackbar>
      <Container>
        <Box mb={6} mt={3} alignItems="center" justifyContent="center">
        <Typography align="center" variant="h3">Tareas {todos.length} Pendientes</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} m={3}>
            <Formulario dispatch={dispatch} setopen={setopen} />
          </Grid>
          <Grid item xs={12} sm={6} m={3}>
            <ListaTareas
              todos={todos}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TodoApp;
