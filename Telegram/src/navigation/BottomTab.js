import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Contacts from '../Pages/ContactsPage/contactsPage';
import MessageList from '../Pages/MessageListPage/messageListPage';
import {SettingStack} from './settingStack';
import {ThemeContext} from '../utils/themeManager';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  const {theme} = React.useContext(ThemeContext);
  const colorSelect = theme === 'Dark' ? '#fff' : '#212121';
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: theme === 'Dark' ? '#212121' : '#fff',
        tabBarActiveBackgroundColor: theme === 'Dark' ? '#212121' : '#fff',
      }}>
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarLabel: 'Contacts',
          tabBarLabelStyle: {fontSize: 15, fontWeight: 'bold'},
          tabBarIcon: ({color, size}) => (
            <Icon name="account-group" color={colorSelect} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="MessageList"
        component={MessageList}
        options={{
          tabBarLabel: 'Messages',
          tabBarLabelStyle: {fontSize: 15, fontWeight: 'bold'},
          tabBarIcon: ({color, size}) => (
            <Icon name="comment-text-multiple" color={colorSelect} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingStack}
        options={{
          tabBarLabel: 'Settings',
          tabBarLabelStyle: {fontSize: 15, fontWeight: 'bold'},
          tabBarIcon: ({color, size}) => (
            <Icon name="cog-outline" color={colorSelect} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
