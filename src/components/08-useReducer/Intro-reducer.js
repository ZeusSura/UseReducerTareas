const initialState = [
  {
    id: 1,
    tarea: "Comprar leche",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "agregar") {

     return [...state,action.payload]
  }
  return state
};

const todos=todoReducer();
const newTodo = {
  id: 2,
  tarea: "Comprar pan",
  done: false,
};

const newTodoAction= {
    type:"agregar",
    payload:newTodo
}

const todo  = todoReducer(todos,newTodoAction)
