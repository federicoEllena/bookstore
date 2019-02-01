import React from 'react';
import { View, Text } from 'react-native';

const BookItem = ({ item }) => {
  const { title, author, coverImg } = item;

  return (
    <View>
      <Text>ffff</Text>
      <Text>{author}</Text>
      <Text>{coverImg}</Text>
    </View>
  );
};

export default BookItem;
