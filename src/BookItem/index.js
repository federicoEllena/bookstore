import React from 'react';
import {
  View, Text, Image,
} from 'react-native';

import styles from './styles';

const BookItem = ({ item }) => {
  const { title, author, coverImg } = item;
  const { containerStyle, coverImgStyle, bookTextStyle, bookTitleStyle, bookAuthorStyle } = styles;
  // eslint-disable-next-line global-require
  const imgSource = coverImg ? { uri: coverImg } : require('./book_placeholder.png');

  return (
    <View style={containerStyle}>
      <View>
        <Image source={imgSource} style={coverImgStyle} />
      </View>
      <View style={bookTextStyle}>
        <Text style={bookTitleStyle}>{title}</Text>
        <Text style={bookAuthorStyle}>{author}</Text>
      </View>
    </View>
  );
};

export default BookItem;


//<Image source={require('./my-icon.png')} /> static
//source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} dinamico