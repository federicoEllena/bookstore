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

export const removeToggled = () => {
  return {
    type: 'REMOVE_TOGGLED',
    payload: null,
  };
};

export const storeBookData = bookData => {
  return {
    type: 'STORE_DATA',
    payload: bookData,
  };
};

/* unTodo ={id: 1, text:'aaaa', toggled: false} */