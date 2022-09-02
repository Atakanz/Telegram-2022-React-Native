import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  pickerData: {
    width: '25%',
  },
  pickerDataLight: {
    color: '#212121',
  },
  pickerDataDark: {
    color: '#fff',
  },
  codeTelephone: {
    flexDirection: 'row',
  },
  enabledDirection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameInput: {
    width: Dimensions.get('window').width / 1.2,
    position: 'relative',
    left: 56,
  },
  phoneCodeText: {
    flex: 1,
    position: 'absolute',
    top: 10,
    left: 10,
  },
});
