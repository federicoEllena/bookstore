import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const BigButton = ({ children, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.buttonTextStyle}>{children}</Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#ff3333'
  }
});

export default BigButton;
