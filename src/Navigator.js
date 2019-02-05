/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import TodoList from './TodoList';
import BookList from './BookList';
import BookDetails from './BookDetails';

const navigationOptions = {
  title: 'Book Store',
  headerStyle: {
    backgroundColor: '#008000',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: createBottomTabNavigator(
      {
        Wishlist: {
          screen: TodoList,
          navigationOptions: {
            tabBarLabel: 'Wishlist',
            // eslint-disable-next-line react/display-name
            tabBarIcon: () => (
              <Icon name="md-book" size={20} color="#bfbfbf" />
            ),
          },
        },
        Books: {
          screen: BookList,
          navigationOptions: {
            tabBarLabel: 'Book list',
            // eslint-disable-next-line react/display-name
            tabBarIcon: () => (
              <Icon name="md-bookmark" size={20} color="#bfbfbf" />
            ),
          },
        },
      },
      {
        tabBarOptions: {
          activeBackgroundColor: '#009900',
          inactiveBackgroundColor: '#008000',
          activeTintColor: '#fff',
          inactiveTintColor: '#bfbfbf',
          showIcon: true,
        },
      },
    ),
    navigationOptions,
  },
  Details: {
    screen: BookDetails,
    navigationOptions: {
      title: 'Book detail',
      headerStyle: {
        backgroundColor: '#008000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
},
{
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
