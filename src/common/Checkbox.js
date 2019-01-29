import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const Checkbox = ({ toggled }) => (
  <TouchableWithoutFeedback>
    <View style={styles.outerBoxStyle}>
      <View style={toggled ? styles.innerBoxStyle : null}/>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  outerBoxStyle: {
    width: 10,
    height: 10,
    borderColor: '#333333',
    borderWidth: 5
  },
  innerBoxStyle: {
    width: 5,
    height: 5,
    borderColor: '#333333'
  }
});

export default Checkbox;