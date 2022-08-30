import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../Pages/LoginPage/loginPage';
import Contacts from '../Pages/ContactsPage/contactsPage';
import MessageArea from '../Pages/MessagePage/messagePage';

const Stack = createNativeStackNavigator();

export const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="MessagePage" component={MessageArea} />
    </Stack.Navigator>
  );
};
