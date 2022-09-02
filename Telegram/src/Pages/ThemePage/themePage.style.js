import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  touchableView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 210,
  },
  containerLight: {
    backgroundColor: '#fff',
  },
  containerDark: {
    backgroundColor: '#212121',
  },
  button: {
    borderRadius: 70,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 140,
  },
  buttonDark: {
    borderColor: '#fff',
  },
  buttonLight: {
    borderColor: '#212121',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textLight: {
    color: '#212121',
  },
  textDark: {
    color: '#fff',
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
  backButtonDark: {
    backgroundColor: '#212121',
  },
  backButtonLight: {
    backgroundColor: '#71a6e2',
  },
});
