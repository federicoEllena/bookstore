import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppNavigator from './AppNavigator';
import reducers from './redux/todoListReducer';


export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <AppNavigator />
      </Provider>
    );
  }
}
