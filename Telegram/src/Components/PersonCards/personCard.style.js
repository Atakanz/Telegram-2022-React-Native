import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  enabledDirection: {
    flexDirection: 'row',
  },
  containerDark: {
    backgroundColor: '#212121',
  },
  containerLight: {
    backgroundColor: '#fff',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  viewImg: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textInfo: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  textDark: {
    color: '#fff',
  },
  textLight: {
    color: '#212121',
  },
  textView: {
    justifyContent: 'center',
  },
});
