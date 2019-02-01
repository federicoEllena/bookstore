import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const SmallButton = ({ children, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.buttonTextStyle}>{children}</Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#bfbfbf'
  }
});

export default SmallButton;
