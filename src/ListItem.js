import React from 'react';
import { View, Text } from 'react-native';
import DeleteButton from './common/DeleteButton';
import Checkbox from './common/Checkbox';

const ListItem = ({ item, onRemove, onToggle }) => {
  const onRemoveItem = () => onRemove(item.id);
  const onToggleItem = () => onToggle(item.id);

  const { containerStyle, textStyle }= styles;

  return(
    <View style={containerStyle}>
      <Text style={textStyle}>{item.text}</Text>
      <Checkbox onPress={onToggleItem} toggled={item.toggled}/>
      <DeleteButton onPress={onRemoveItem}/>
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
    position: 'relative',
  },
  textStyle:{
    fontSize: 16
  }
};

export default ListItem;
