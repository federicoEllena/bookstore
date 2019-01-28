import React from 'react';
import { View, Text } from 'react-native';

const ListItem = ({ itemText }) => {
  return(
    <View style={styles.containerStyle}>
      <Text>{ itemText }</Text>
    </View>
  );
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
  },
  textStyle: {
    fontSize: 18
  }
};

export default ListItem;
