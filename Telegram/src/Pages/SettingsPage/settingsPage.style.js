import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerDark: {
    backgroundColor: '#212121',
  },
  containerLight: {
    backgroundColor: '#fff',
  },
  profilePhoto: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  profilePhotoView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textLight: {
    color: '#212121',
  },
  textDark: {
    color: '#fff',
  },
  profileInfoCard: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
