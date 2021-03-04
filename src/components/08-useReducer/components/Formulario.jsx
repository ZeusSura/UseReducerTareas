import { Box, TextField, Button, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "../../../hooks/useForm";

const Formulario = ({ setopen, dispatch }) => {
  const [{ desc }, handleInputChange, reset] = useForm({ desc: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (desc.trim().length > 0) {
      const newToDo = {
        id: new Date().getTime(),
        desc: desc,
        done: false,
        fecha: new Date().getTime(),
      };
      const action = {
        type: "Add",
        payload: newToDo,
      };
      dispatch(action);
      reset();
    } else {
      setopen(true);
    }
  };
  return (
    <>
      <Typography align="center" variant="h4">
        Agregar Tareas
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mt={4}>
          <TextField
            fullWidth
            id="desc"
            name="desc"
            label="Tarea"
            onChange={handleInputChange}
            value={desc}
          />
        </Box>
        <Box mt={2}>
          <Button fullWidth variant="contained" color="primary" type="submit">
            Agregar Tarea
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Formulario;
