import React from 'react';
import { View, Text } from 'react-native';
import DeleteButton from './common/DeleteButton';

const ListItem = ({ itemText }) => {
  const { containerStyle, textStyle }= styles;

  return(
    <View style={containerStyle}>
      <Text style={textStyle}>{ itemText }</Text>
      <DeleteButton />
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    borderColor: '#ddd',
    position: 'relative'
  },
  textStyle:{
    fontSize: 16
  }
};

export default ListItem;
