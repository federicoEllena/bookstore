import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SmallButton from '../common/SmallButton';
import Header from '../common/Header';
import Input from '../common/Input';
import ItemList from '../ItemList';

const TodoListLayout = ({ onAddTodo, todos, onChangeText, todoInput }) => (
  <View style={{ flex: 1 }}>
    <Header headerText="TodoList">
      <SmallButton onPress={onAddTodo}>Add +</SmallButton>
    </Header>
    <Input
      placeHolder="Enter item"
      onChangeText={onChangeText}
      value={todoInput}
    />
    <ItemList />
  </View>
);

export default TodoListLayout;