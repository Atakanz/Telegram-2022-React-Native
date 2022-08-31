import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginStack } from './navigation/loginStack';
import { SettingStack } from './navigation/settingStack';
import MessageList from './Pages/MessageListPage/messageListPage';
import { ThemeProvider } from './utils/themeManager';
import { UserProvider } from './utils/userManager';
import { LoginProvider } from './utils/loginManager';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <LoginProvider>
          <UserProvider>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
              <Tab.Screen name="LoginTab" component={LoginStack} />
              <Tab.Screen name="MessageTab" component={MessageList} />
              <Tab.Screen name="SettingsTab" component={SettingStack} />
            </Tab.Navigator>
          </UserProvider>
        </LoginProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
