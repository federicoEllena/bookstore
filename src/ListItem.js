import React from 'react';
import { View, Text } from 'react-native';
import DeleteButton from './common/DeleteButton';

const ListItem = ({ itemText, onRemove }) => {
  const { containerStyle, textStyle }= styles;

  return(
    <View style={containerStyle}>
      <Text style={textStyle}>{ itemText }</Text>
      <DeleteButton onPress={onRemove}/>
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
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
