import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import editingPage from '../Pages/EditingPage/editingPage';
import themePage from '../Pages/ThemePage/themePage';
import settingsPage from '../Pages/SettingsPage/settingsPage';

const Stack = createNativeStackNavigator();

export const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={settingsPage} />
      <Stack.Screen name="themeSettings" component={themePage} />
      <Stack.Screen name="editingSettings" component={editingPage} />
    </Stack.Navigator>
  );
};
