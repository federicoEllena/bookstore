import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const DeleteButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Icon name="trash-o" style={styles.buttonTextStyle} />
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8c8c8c',
  }
});

export default DeleteButton;
