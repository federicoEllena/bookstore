import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { scale, verticalScale } from '../Scaling';

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
    backgroundColor: '#ffffff',
    borderColor: '#bfbfbf',
    borderWidth: 1
  },
  inputStyle: {
    color: '#0f0f0a',
    paddingRight: scale(10),
    paddingLeft: scale(10),
    fontSize: scale(18),
    lineHeight: verticalScale(20),
  }
});

export default Input;
