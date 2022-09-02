import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import TopBar from '../../Components/topBar/topBar';
import styles from './editingPage.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FormUnit from '../../Components/textınputs/formUnit';
import Buttons from '../../Components/Buttons/Buttons';
import {ThemeContext} from '../../utils/themeManager';
import {UserContext} from '../../utils/userManager';
import {LoginContext} from '../../utils/loginManager';
import LoginForm from '../../Components/LoginForm/loginForm';

const EditingPage = ({navigation}) => {
  const {theme} = React.useContext(ThemeContext);
  const {setUser} = React.useContext(UserContext);
  const {user} = React.useContext(UserContext);
  const [userName, setUserName] = React.useState(null);
  const [userTelephone, setTelephone] = React.useState(null);
  const [selectedCode, setSelectedCode] = React.useState();
  const {setIsLoggedIn} = React.useContext(LoginContext);
  const colorSelect = theme === 'Dark' ? '#fff' : '#212121';
  const goBack = (
    <Icon.Button
      name="keyboard-backspace"
      size={30}
      onPress={() => navigation.goBack()}
      style={[styles.ıconButton, styles[`backButton${theme}`]]}
      color={colorSelect}
    />
    // goBack() navigation property is added to goBack ıcon.
  );
  const accountedit = (
    <Icon name="account-edit" size={25} color={colorSelect} />
  );
  const edit = () => {
    setUser([userName, selectedCode, userTelephone]);
    navigation.navigate('Settings');
  };
  const logOut = () => {
    setUser([]);
    setIsLoggedIn(false);
    navigation.navigate('LoginPage');
  };
  return (
    <SafeAreaView style={styles.enabledDirection}>
      <TopBar name="Edit profile" icon1={goBack} icon3={accountedit} />
      <View style={[styles.container, styles[`container${theme}`]]}>
        <LoginForm
          phoneFormTask={setTelephone}
          pickerTask={setSelectedCode}
          userFormTask={setUserName}
          name1="Edit profile"
          name2="Log out"
          buttonTask1={edit}
          buttonTask2={logOut}
        />
      </View>
    </SafeAreaView>
  );
};

export default EditingPage;
