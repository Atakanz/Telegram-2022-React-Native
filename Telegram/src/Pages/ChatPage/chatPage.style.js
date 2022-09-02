import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    flex: 1,
    paddingTop: 5,
  },
  container: {
    flex: 1,
  },
  enabledDirection: {
    flex: 1,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingLeft: 12,
    alignItems: 'center',
  },
  bottomBarDark: {
    backgroundColor: '#212121',
  },
  bottomBarLight: {
    backgroundColor: '#fff',
  },
  textInput: {
    width: '75%',
  },
  ıconButton: {
    flex: 0,
    width: 30,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 0,
    padding: 0,
    paddingTop: 0,
    color: 'white',
  },
  ıconButtonDark: {
    backgroundColor: '#212121',
  },
  ıconButtonLight: {
    backgroundColor: '#fff',
  },
  backButtonDark: {
    backgroundColor: '#212121',
  },
  backButtonLight: {
    backgroundColor: '#71a6e2',
  },
});
