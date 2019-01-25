import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SmallButton from './common/SmallButton';
import Header from './common/Header';
import Input from './common/Input';
import ItemList from './ItemList';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from './redux/actions';

class TodoList extends Component {
  
  state = {
    todoInput: null
  };  
  
  addTodo = () => {
    this.props.dispatch(addTodo(this.state.todoInput))
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
        <Text>{this.props.todos}</Text>
        <ItemList/>
      </View>
    );
  };
};

const mapStateToProps = store => ({
  todos: store.todos
});

export default connect(mapStateToProps)(TodoList);