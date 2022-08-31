import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import editingPage from '../Pages/EditingPage/editingPage';
import themePage from '../Pages/ThemePage/themePage';
import settingsPage from '../Pages/SettingsPage/settingsPage';
import {ThemeContext} from '../utils/themeManager';

const Stack = createNativeStackNavigator();

export const SettingStack = () => {
  const {theme} = React.useContext(ThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme === 'Dark' ? '#212121' : '#fff',
        },
        headerTintColor: theme === 'Dark' ? '#fff' : '#212121',
      }}>
      <Stack.Screen name="Settings" component={settingsPage} />
      <Stack.Screen name="Tema" component={themePage} />
      <Stack.Screen name="editingSettings" component={editingPage} />
    </Stack.Navigator>
  );
};
