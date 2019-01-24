import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const Input = ({ placeHolder, value, onChangeText }) => {
  return(
    <View style={styles.containerStyle}>
      <TextInput
        placeholder={placeHolder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffe6',
    borderBottomColor: '#bfbfbf',
    borderBottomWidth: 1
  },
  inputStyle: {
    color: '#0f0f0a',
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 18,
    lineHeight: 20
  }
});

export default Input;
