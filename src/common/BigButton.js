import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { scale, verticalScale } from '../Scaling';

const BigButton = ({ children, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.buttonTextStyle}>{children}</Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: verticalScale(20),
    fontWeight: '500',
    color: '#ff6666',
    alignSelf: 'center',
  }
});

export default BigButton;
