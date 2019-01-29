import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

import styles from './styles';

const DeleteButton = ({ onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Icon name="trash-o" style={styles.buttonTextStyle} />
    </TouchableOpacity>
  );

export default DeleteButton;