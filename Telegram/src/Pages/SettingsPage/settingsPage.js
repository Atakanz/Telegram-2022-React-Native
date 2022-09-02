import React from 'react';
import {SafeAreaView, Image, View, Text} from 'react-native';
import Buttons from '../../Components/Buttons/Buttons';
import TopBar from '../../Components/topBar/topBar';
import styles from './settingsPage.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../../utils/themeManager';
import {UserContext} from '../../utils/userManager';

const SettingsPage = ({navigation}) => {
  const {theme} = React.useContext(ThemeContext);
  const {user} = React.useContext(UserContext);
  const colorSelect = theme === 'Dark' ? '#fff' : '#212121';
  const magnify = <Icon name="magnify" size={25} color={colorSelect} />;
  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
      <TopBar name="Settings" icon3={magnify} />
      <View>
        <View style={styles.profilePhotoView}>
          <Image
            source={require('../../assets/atakan.jpg')}
            style={styles.profilePhoto}
          />
          <View style={styles.profileInfoCard}>
            <Text style={[styles.profileName, styles[`text${theme}`]]}>
              {user[0]}
            </Text>
            <Text style={[styles.number, styles[`text${theme}`]]}>
              {user[1]} {user[2]}
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <Buttons
            name="Theme Settings"
            task={() => navigation.navigate('Tema')}
          />
          <Buttons
            name="Edit Profile"
            task={() => navigation.navigate('editingSettings')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingsPage;
