import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    alignItems: 'center',
    borderBottomWidth: 0.75,
    borderColor: '#ddd',
  },
  coverImgStyle: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
  bookTextStyle: {
    paddingRight: 10,
    alignItems: 'center',
  },
  bookTitleStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bookAuthorStyle: {
    fontSize: 14,
  },

});

export default styles;
