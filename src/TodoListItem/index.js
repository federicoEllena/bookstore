import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../redux/actions';

import TodoListLayout from './layout';

class TodoList extends Component {
  state = { todoInput: '' };
  
  handleAddTodo = () => {
    this.props.dispatch(addTodo(this.state.todoInput));
    this.handleClearInputField();
  };

  handleClearInputField = () => this.setState({todoInput: ''});

  handleOnChangeText = text => this.setState({ todoInput: text });

  render() {
    return (
      <TodoListLayout
        onAddTodo={this.handleAddTodo}
        todos={this.props.todos}
        onChangeText={this.handleOnChangeText}
        todoInput={this.state.todoInput}
      />
    );
  };
};

const mapStateToProps = store => ({
  todos: store.todos
});

export default connect(mapStateToProps)(TodoList);