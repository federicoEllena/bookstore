import React from 'react';
import {
  TouchableOpacity, Text, Image, View
} from 'react-native';

import styles from './styles';

const BookItem = ({ item, onPress }) => {
  const { title, author, coverImg } = item;
  const { containerStyle, coverImgStyle, bookTextStyle, bookTitleStyle, bookAuthorStyle } = styles;
  // eslint-disable-next-line global-require
  const imgSource = coverImg ? { uri: coverImg } : require('./book_placeholder.png');

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <View>
        <Image source={imgSource} style={coverImgStyle} />
      </View>
      <View style={bookTextStyle}>
        <Text style={bookTitleStyle}>{title}</Text>
        <Text style={bookAuthorStyle}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookItem;


//<Image source={require('./my-icon.png')} /> static
//source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} dinamico