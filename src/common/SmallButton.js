import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { scale } from '../Scaling';

const SmallButton = ({ children, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.buttonTextStyle}>{children}</Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: scale(20),
    fontWeight: '600',
    color: '#bfbfbf'
  }
});

export default SmallButton;
