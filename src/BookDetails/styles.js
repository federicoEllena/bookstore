import { StyleSheet } from 'react-native';

import { scale } from '../Scaling';

const styles = StyleSheet.create({
  titleTextStyle: {
    fontWeight: 'bold',
    fontSize: scale(18),
    padding: scale(5),
  },
  authorTextStyle: {
    fontSize: scale(16),
    padding: scale(5),
  },
  detailTextStyle: {
    fontSize: scale(14),
    padding: scale(5),
  },
});

export default styles;
