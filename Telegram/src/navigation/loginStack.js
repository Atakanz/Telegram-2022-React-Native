import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../Pages/LoginPage/loginPage';
import Contacts from '../Pages/ContactsPage/contactsPage';
import MessageArea from '../Pages/MessagePage/messagePage';
import LoginSecond from '../Pages/LoginPageSecond/loginPageSecond';
import {ThemeContext} from '../utils/themeManager';
import {LoginContext} from '../utils/loginManager';
const Stack = createNativeStackNavigator();

export const LoginStack = () => {
  const {theme} = React.useContext(ThemeContext);
  const {isLoggedIn} = React.useContext(LoginContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme === 'Dark' ? '#212121' : '#fff',
        },
        headerTintColor: theme === 'Dark' ? '#fff' : '#212121',
      }}>
      <Stack.Screen
        name="Giriş"
        component={isLoggedIn ? LoginSecond : LoginPage}
      />
      <Stack.Screen name="Rehber" component={Contacts} />
      <Stack.Screen name="MessagePage" component={MessageArea} />
    </Stack.Navigator>
  );
};
