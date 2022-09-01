import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    flex: 1,
    paddingTop: 5,
  },
  container: {
    flex: 1,
  },
  enableDirection: {
    flex: 1,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingLeft: 12,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  textInput: {
    width: '75%',
  },
  sendButton: {
    flex: 0,
    width: 30,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    margin: 0,
    padding: 0,
    paddingTop: 0,
    color: 'white',
  },
});
