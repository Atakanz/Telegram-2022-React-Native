import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoginStack} from './navigation/loginStack';
import {SettingStack} from './navigation/settingStack';
import MessageList from './Pages/MessageListPage/messageListPage';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="LoginTab" component={LoginStack} />
        <Tab.Screen name="MessageTab" component={MessageList} />
        <Tab.Screen name="SettingsTab" component={SettingStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
