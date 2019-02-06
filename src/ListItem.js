import React from 'react';
import { View, Text } from 'react-native';

import DeleteButton from './common/DeleteButton';
import Checkbox from './common/Checkbox';

import { scale } from './Scaling';

const ListItem = ({ item, onRemove, onToggle }) => {
  const onRemoveItem = () => onRemove(item.id);
  const onToggleItem = () => onToggle(item.id);

  const { containerStyle, textStyle, buttonsContainerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{item.text}</Text>
      <View style={buttonsContainerStyle}>
        <Checkbox onPress={onToggleItem} toggled={item.toggled} />
        <DeleteButton onPress={onRemoveItem} />
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: scale(5),
    paddingRight: scale(10),
    paddingLeft: scale(10),
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
  textStyle: {
    fontSize: scale(16),
  },
  buttonsContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export default ListItem;
