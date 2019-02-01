import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import TabNavigator from './TabNavigator';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Book store',
    headerStyle: {
      backgroundColor: '#008000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <TabNavigator />
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
},
{
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
