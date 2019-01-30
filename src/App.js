import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './redux/todoListReducer';
// import TodoList from './TodoListItem';
import TodoList from './TodoList';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <TodoList />
      </Provider>
    );
  }
}
