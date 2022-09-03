import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './Pages/LoginPage/loginPage';
import {BottomTab} from './navigation/BottomTab';
import ChatPage from './Pages/ChatPage';
import {ThemeProvider} from './utils/themeManager';
import {UserProvider} from './utils/userManager';
import {ReceiverProvider} from './utils/receiverManager';
import {LoginProvider} from './utils/loginManager';
// import {MessageProvider} from './utils/messageBoxManager';
// import {ReceiverProvider} from './utils/receiverManager';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <LoginProvider>
          <ReceiverProvider>
            <UserProvider>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="BottomTab" component={BottomTab} />
                <Stack.Screen name="ChatPage" component={ChatPage} />
              </Stack.Navigator>
            </UserProvider>
          </ReceiverProvider>
        </LoginProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
