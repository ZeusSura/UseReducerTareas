const  todoReducer  =( state= [],action )=>{ 
    switch (action.type) {
        case 'Add':
            return [...state,action.payload]
        
        case 'Delete':
            return state.filter(tarea=>tarea.id!==action.payload)
        case 'Complete':
            return state.map(tarea=>(tarea.id===action.payload)?{...tarea,done:!tarea.done}:tarea)
        default:
            return state

    }
}
export default todoReducer