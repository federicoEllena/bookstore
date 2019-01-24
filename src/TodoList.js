import React, { Component } from 'react';
import { View } from 'react-native';

import SmallButton from './common/SmallButton';
import Header from './common/Header';
import Input from './common/Input';

export default class TodoList extends Component {
  handleAddButtonPress = () => {
    console.log('this worked!...well..not really');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="TodoList">
          <SmallButton onPress={this.handleAddButtonPress}>Add +</SmallButton>
        </Header>
        <Input placeHolder="Enter item" />
      </View>
    );
  }
}
