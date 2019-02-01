import { createStore, combineReducers } from 'redux';

import todoListReducer from './todoListReducer';
import bookListReducer from './bookListReducer';

const reducers = combineReducers({
  todos: todoListReducer,
  books: bookListReducer,
});

const store = createStore(reducers);

export default store;

/*createStore(todoListReducer);

store: 
{
  todoID: 0,
  todos: [...],
  books: [...]
}

createStore(combineReducers({ todos: ..., books: ... }));

store: 
{
  todos: {
    todoID: 0,
    todos: [...]
  }
  books: {
    books: [...]
  }
}*/