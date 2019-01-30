const initialState = {
  todoID: 0,
  todos: [],
};

export default (state = initialState, action) => {
  const { todos, todoID } = state;
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TODO':
      return { ...state, todoID: todoID + 1, todos: [{ id: (todoID + 1), text: payload, toggled: false }, ...todos] };
    case 'REMOVE_TODO':
      return { ...state, todos: todos.filter(todo => todo.id !== payload) };
    case 'TOGGLE_TODO': {
      const newTodos = [...todos];
      const getTodo = newTodos.find(todo => todo.id === payload);
      const toggledTodo = { ...getTodo, toggled: !getTodo.toggled };
      const todoIndex = newTodos.findIndex(todoFromArray => todoFromArray.id === toggledTodo.id);
      newTodos[todoIndex] = toggledTodo;
      return { ...state, todos: newTodos };
    }
    case 'REMOVE_TOGGLED':
      return { ...state, todos: todos.filter(todo => todo.toggled !== true) };
    default:
      return state;
  }
};
