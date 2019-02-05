import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const BookDetails = ({ navigation }) => {
  const bookItem = navigation.getParam('book');
  const { title, author, detail } = bookItem;
  const { titleTextStyle, authorTextStyle, detailTextStyle } = styles;

  return (
    <View>
      <Text style={titleTextStyle}>{title}</Text>
      <Text style={authorTextStyle}>{author}</Text>
      <Text style={detailTextStyle}>{detail}</Text>
    </View>
  );
};

export default BookDetails;
