import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  enabledDirection: {
    justifyContent: 'center',
    paddingLeft: 5,
    borderBottomColor: 'white',
    borderBottomWidth: 0.2,
  },
  enabledDirectionLight: {
    backgroundColor: '#71a6e2',
  },
  enabledDirectionDark: {
    backgroundColor: '#212121',
  },
  directionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightIcon: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginVertical: 10,
    alignItems: 'center',
  },
  secondIcon: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 6,
  },
  textDark: {
    color: 'white',
  },
  textLight: {
    color: '#212121',
  },
  textView: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  img: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginHorizontal: 10,
    marginLeft: 2,
    marginRight: 1,
  },
  textImage: {
    flexDirection: 'row',
    marginRight: 'auto',
    alignItems: 'center',
  },
  firstIcon: {
    marginVertical: 10,
  },
});
