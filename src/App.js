import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Navigator from './Navigator';
import store from './redux';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
