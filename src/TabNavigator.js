import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import TodoList from './TodoList';
import BookList from './BookList';

const TabNavigator = createBottomTabNavigator(
  {
    Wishlist: {
      screen: TodoList,
      navigationOptions: {
        tabBarLabel: 'Wishlist',
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({ focused, tintColor}) => (
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
});


export default createAppContainer(TabNavigator);


/*
const TabNavigator = createBottomTabNavigator({
  Wishlist: TodoList,
  Books: BookList,
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
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      const IconToDisplay = Icons;
      let iconName;
      if (routeName === 'Wishlist') {
        iconName = 'list-ul';
      } else if (routeName === 'Books') {
        iconName = 'fa-book';
      }
      return <IconToDisplay name={iconName} size={20} color="#bfbfbf" />;
    },
  }),
});
 */

/*const TabNavigator = createBottomTabNavigator(
  {
    Wishlist: {
      screen: TodoList,
      navigationOptions: {
        tabBarLabel: 'Wishlist',
        // eslint-disable-next-line react/display-name
        tabBarIcon: () => (
          <Icon name="home" size={20} color="#bfbfbf" />
        ),
      },
    },
    Books: {
      screen: BookList,
      navigationOptions: {
        tabBarLabel: 'Book list',
        // eslint-disable-next-line react/display-name
        tabBarIcon: () => (
          <Icon name="home" size={20} color="#bfbfbf" />
        ),
      },
    },
  },
);*/



/*
const TabNavigator = createBottomTabNavigator({
  Wishlist: TodoList,
  Books: BookList,
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
);
*/