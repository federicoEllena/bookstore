import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import SmallButton from './common/SmallButton';
import Header from './common/Header';
import Input from './common/Input';
import ItemList from './ItemList';
import { addTodo, removeToggled } from './redux/actions';
import BigButton from './common/BigButton';

class TodoList extends Component {
  state = { todoInput: '' };

  addTodo = () => {
    this.props.dispatch(addTodo(this.state.todoInput));
    this.clearInputField();
  };

  clearInputField = () => this.setState({ todoInput: '' });

  removeToggled = () => this.props.dispatch(removeToggled());

  render() {
    return (
      <View>
        <Header headerText="TodoList">
          <SmallButton onPress={this.addTodo}>Add +</SmallButton>
        </Header>
        <ScrollView>
          <Input
            placeHolder="Enter item"
            onChangeText={text => this.setState({ todoInput: text })}
            value={this.state.todoInput}
          />
          <ItemList />
          <BigButton onPress={this.removeToggled}>Remove selected</BigButton>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = store => ({ todos: store.todos });

export default connect(mapStateToProps)(TodoList);
