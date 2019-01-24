import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ headerText, children }) => (
  <View style={styles.viewStyle}>
    <Text style={styles.headerTextStyle}>{headerText}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#4da6ff',
    height: 50,
    shadowColor: '#0059b3',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.75,
    elevation: 5,
    paddingTop: 13,
    paddingLeft: 10,
    paddingRight: 10
  },
  headerTextStyle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#F8F8F8'
  }
});

export default Header;
