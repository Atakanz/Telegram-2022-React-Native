import React from 'react';
import {SafeAreaView, Alert} from 'react-native';
// import Buttons from '../../Components/Buttons/Buttons';
import {ThemeContext} from '../../utils/themeManager';
import {UserContext} from '../../utils/userManager';
import {LoginContext} from '../../utils/loginManager';
// import {Picker} from '@react-native-picker/picker';
// import CountryCodes from '../../data/CountryCodes.json';
// import FormUnit from '../../Components/textınputs/formUnit';
import LoginForm from '../../Components/LoginForm/loginForm';
import styles from './loginPage.style';

const LoginPage = ({navigation}) => {
  const {theme} = React.useContext(ThemeContext);
  const {setUser} = React.useContext(UserContext);
  const {user} = React.useContext(UserContext);
  const [userName, setUserName] = React.useState(null);
  const [userTelephone, setTelephone] = React.useState(null);
  const [selectedCode, setSelectedCode] = React.useState();
  const {setIsLoggedIn} = React.useContext(LoginContext);
  const collectUser = () => {
    if (!userName || !selectedCode || !userTelephone) {
      Alert.alert('Telegram', 'Please enter your information');
      return;
    }
    setUser([userName, selectedCode, userTelephone]);
    setIsLoggedIn(true);
    navigation.navigate('BottomTab');
  };

  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
      <LoginForm
        phoneFormTask={setTelephone}
        pickerTask={setSelectedCode}
        userFormTask={setUserName}
        name1="Login"
        buttonTask1={collectUser}
      />
    </SafeAreaView>
  );
};

export default LoginPage;
