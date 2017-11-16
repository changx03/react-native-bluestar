import { StyleSheet } from 'react-native';
// import { Constants } from 'expo';

export const colors = {
  themeColor: 'darkturquoise',
  white: 'white',
  activeTintIOS: '#e91e63',
  activeTintAndroid: 'white',
  tabIndicatorAndroid: 'tomato',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.themeColor,
    height: 40,
  },
  headerText: {
    fontSize: 16,
    color: 'white',
    padding: 5,
  },
  textInput: {
    margin: 20,
    marginBottom: 0,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default styles;
