export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    payload: text
  };
};

export const removeTodo = id => {
  return {
    type: 'REMOVE_TODO',
    payload: id
  };
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  };
};

export const removeToggledTodos = () => {
  return {
    type: 'REMOVE_TOGGLED',
    payload: null,
  };
};

/* unTodo ={id: 1, text:'aaaa', toggled: false} */