import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  messageUnitView: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 4,
    width: 'auto',
    marginHorizontal: 5,
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 10,
    // MessageUnit width is set to changeable with the width of text
  },
  textMessage: {
    fontSize: 19,
    color: 'black',
  },
});
