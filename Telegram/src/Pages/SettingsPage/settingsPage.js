import React from 'react';
import {SafeAreaView} from 'react-native';
import Buttons from '../../Components/Buttons/Buttons';

const SettingsPage = ({navigation}) => {
  return (
    <SafeAreaView>
      <Buttons name="Theme Settings" task={() => navigation.navigate('Tema')} />
      <Buttons
        name="Edit Profile"
        task={() => navigation.navigate('editingSettings')}
      />
    </SafeAreaView>
  );
};

export default SettingsPage;
