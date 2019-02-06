import { StyleSheet } from 'react-native';
import { scale } from '../Scaling';

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: scale(5),
    paddingBottom: scale(5),
    paddingLeft: scale(5),
    alignItems: 'center',
    borderBottomWidth: 0.75,
    borderColor: '#ddd',
  },
  coverImgStyle: {
    height: scale(100),
    width: scale(100),
    borderRadius: scale(100 / 2),
  },
  bookTextStyle: {
    paddingRight: scale(10),
    alignItems: 'center',
  },
  bookTitleStyle: {
    fontWeight: 'bold',
    fontSize: scale(16),
  },
  bookAuthorStyle: {
    fontSize: scale(14),
  },

});

export default styles;
