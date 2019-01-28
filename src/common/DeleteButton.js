import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const SmallButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Icon name="trash-o" style={{color:'#b8b894'}} />
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0f0f0a'
  }
});

export default SmallButton;


//import Icon from "react-native-vector-icons/FontAwesome";
//<Icon name="fas fa-trash" style={{color:'#b8b894'}} />
//<Text style={styles.buttonTextStyle}>{children}</Text>