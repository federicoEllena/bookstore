import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { scale, verticalScale } from '../Scaling';

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
    width: scale(15),
    height: scale(15),
    margin: scale(5),
    borderColor: '#8c8c8c',
    borderWidth: scale(2),
    justifyContent: 'center',
  },
  innerBoxStyle: {
    width: scale(7.5),
    height: scale(7.5),
    borderColor: '#8c8c8c',
    borderWidth: scale(2),
    backgroundColor: '#8c8c8c',
    alignSelf: 'center',
  },
});

export default Checkbox;
