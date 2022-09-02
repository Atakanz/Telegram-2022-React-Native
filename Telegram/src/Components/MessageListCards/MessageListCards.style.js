import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingVertical: 10,
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
    marginLeft: 4,
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
    alignItems: 'flex-start',
  },
  TextMessage: {
    flex: 1,
    position: 'absolute',
    left: 5,
  },
});
