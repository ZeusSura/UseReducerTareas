import { Grid, Box, Container } from "@material-ui/core";
import React, { useReducer } from "react";
import ListaTareas from "./components/ListaTareas";
import todoReducer from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Aprender react",
    done: false,
  },
];
const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);
 
  return (
    <Container >
      <Box mt={3} alignItems="center" justifyContent="center">
        <h1>Tareas ({todos.length})</h1>
      </Box>
      <Box mt={3}>
        <ListaTareas 
        todos={todos}
        />
      </Box>
    </Container>
  );
};

export default TodoApp;
