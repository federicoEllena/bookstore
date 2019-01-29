import React, { Component } from 'react';
import { View } from 'react-native';
import SmallButton from './common/SmallButton';
import Header from './common/Header';
import Input from './common/Input';
import ItemList from './ItemList';
import { connect } from 'react-redux';
import { addTodo } from './redux/actions';

class TodoList extends Component {
  
  state = {
    todoInput: ''
  };
  
  addTodo = () => {
    this.props.dispatch(addTodo(this.state.todoInput));
    this.clearInputField();
  };

  clearInputField = () => {
    this.setState({todoInput: ''})
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="TodoList">
          <SmallButton onPress={this.addTodo}>Add +</SmallButton>
        </Header>
        <Input placeHolder="Enter item"
          onChangeText={text=>this.setState({todoInput: text})}
          value={this.state.todoInput}/>
        <ItemList/>
      </View>
    );
  };
};

const mapStateToProps = store => {
  return {
  todos: store.todos}
  };

export default connect(mapStateToProps)(TodoList);