import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const Checkbox = ({ onPress, toggled }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.outerBoxStyle}>
        <View style={toggled && styles.innerBoxStyle} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  outerBoxStyle: {
    width: 15,
    height: 15,
    margin: 5,
    borderColor: '#8c8c8c',
    borderWidth: 2,
    justifyContent: 'center',
  },
  innerBoxStyle: {
    width: 7.5,
    height: 7.5,
    borderColor: '#8c8c8c',
    borderWidth: 2,
    backgroundColor: '#8c8c8c',
    alignSelf: 'center',
  },
});

export default Checkbox;
