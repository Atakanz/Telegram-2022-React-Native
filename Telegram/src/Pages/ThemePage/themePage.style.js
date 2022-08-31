import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
});
