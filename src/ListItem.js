import React from 'react';
import { View, Text } from 'react-native';

const ListItem = props => {
  <View style={styles.containerStyle}>
    <Text>I'm also a placeholder!</Text>
  </View>
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default ListItem;
