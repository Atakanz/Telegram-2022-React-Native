import React from 'react';
import {SafeAreaView, Alert} from 'react-native';
import Buttons from '../../Components/Buttons/Buttons';
import {ThemeContext} from '../../utils/themeManager';
import {UserContext} from '../../utils/userManager';
import {LoginContext} from '../../utils/loginManager';
import FormUnit from '../../Components/textınputs/formUnit';
import styles from './loginPage.style';

const LoginPage = ({navigation}) => {
  const {theme} = React.useContext(ThemeContext);
  const {setUser} = React.useContext(UserContext);
  const [userName, setUserName] = React.useState(null);
  const [userPassword, setUserPassword] = React.useState(null);
  const {setIsLoggedIn} = React.useContext(LoginContext);

  const collectUser = () => {
    if (!userName || !userPassword) {
      Alert.alert('Telegram', 'Bilgiler boş bırakılamaz');
      return;
    }
    setUser([userName, userPassword]);
    setIsLoggedIn(true);
    navigation.navigate('BottomTab');
  };

  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
      <FormUnit labelName="İsim" holder="User Name" task={setUserName} />
      <FormUnit
        labelName="Şifre giriniz"
        holder="Password"
        task={setUserPassword}
      />
      <Buttons name="Login" task={collectUser} />
    </SafeAreaView>
  );
};

export default LoginPage;
