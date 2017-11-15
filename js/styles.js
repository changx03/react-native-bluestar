import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

export const colors = {
  themeColor: 'darkturquoise',
  white: 'white',
  activeTintIOS: '#e91e63',
  activeTintAndroid: 'white',
  tabIndicatorAndroid: 'tomato'
};

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  header: {
    backgroundColor: colors.themeColor,
    height: 40
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10
  }
});

export default styles;
