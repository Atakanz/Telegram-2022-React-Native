import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../Pages/LoginPage/loginPage';
import Contacts from '../Pages/ContactsPage/contactsPage';
import MessageArea from '../Pages/MessagePage/messagePage';
import {ThemeContext} from '../utils/themeManager';

const Stack = createNativeStackNavigator();

export const LoginStack = () => {
  const {theme} = React.useContext(ThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme === 'Dark' ? '#212121' : '#fff',
        },
        headerTintColor: theme === 'Dark' ? '#fff' : '#212121',
      }}>
      <Stack.Screen name="Giriş" component={LoginPage} />
      <Stack.Screen name="Rehber" component={Contacts} />
      <Stack.Screen name="MessagePage" component={MessageArea} />
    </Stack.Navigator>
  );
};
