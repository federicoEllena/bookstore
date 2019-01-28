const initialState = {
  todoID: 0,
  todos:[]
};

export default (state = initialState, action) => {
  const { todos, todoID } = state;
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TODO': {
      console.log(state);
      return {...state, todoID:todoID+1, todos:[{ id: (todoID + 1), text: payload }, ...todos]};
    } 
    case 'REMOVE_TODO':
      return state.filter(payload => state.id !== payload); // revisarlo y repensarlo
    default:
      return state;
  }
};

/* approach:
    case 'ADD_TODO': {
        return {...state, todos:[{ id: (todoID + 1), text: payload }, ...todos]};
    } 

    esto me esta generando keys duplicadas, ya que no se esta seteando el nuevo ID en el state
    alternativa para no mutar el todoID del state?
     */