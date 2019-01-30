import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const BigButton = ({ children, onPress }) => (
    <TouchableOpacity>
      <Text style={styles.buttonTextStyle}>{children}</Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ff4d4d',
    alignSelf: 'center',
  }
});

export default BigButton;
