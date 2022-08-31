import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Contacts from '../Pages/ContactsPage/contactsPage';
import MessageList from '../Pages/MessageListPage/messageListPage';
import {SettingStack} from './settingStack';
const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="MessageList" component={MessageList} />
      <Tab.Screen name="SettingsTab" component={SettingStack} />
    </Tab.Navigator>
  );
};
