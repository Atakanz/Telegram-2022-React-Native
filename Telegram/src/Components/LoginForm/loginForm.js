import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Buttons from '../Buttons/Buttons';
import {ThemeContext} from '../../utils/themeManager';
import {UserContext} from '../../utils/userManager';
import {LoginContext} from '../../utils/loginManager';
import {Picker} from '@react-native-picker/picker';
import CountryCodes from '../../data/CountryCodes.json';
import FormUnit from '../textınputs/formUnit';
import styles from './loginForm.style';

const LoginForm = props => {
  const {theme} = React.useContext(ThemeContext);
  const {setUser} = React.useContext(UserContext);
  const {user} = React.useContext(UserContext);
  const [userName, setUserName] = React.useState(null);
  const [userTelephone, setTelephone] = React.useState(null);
  const [selectedCode, setSelectedCode] = React.useState(' ');
  const {setIsLoggedIn} = React.useContext(LoginContext);
  return (
    <SafeAreaView style={styles.enabledDirection}>
      <View style={styles.codeTelephone}>
        <Picker
          selectedValue={selectedCode}
          mode="dropdown"
          style={[styles.pickerData, styles[`pickerData${theme}`]]}
          onValueChange={(itemValue, itemIndex) => props.pickerTask(itemValue)}>
          {CountryCodes.map(item => (
            <Picker.Item
              key={item.code}
              label={item.code}
              value={item.dial_code}
            />
          ))}
        </Picker>
        <FormUnit
          labelName="Telephone"
          holder="Telephone"
          task={props.phoneFormTask}
        />
      </View>
      <View style={styles.nameInput}>
        <FormUnit
          labelName="İsim"
          holder="User Name"
          task={props.userFormTask}
        />
      </View>

      {props.name1 && <Buttons name={props.name1} task={props.buttonTask1} />}
      {props.name2 && <Buttons name={props.name2} task={props.buttonTask2} />}
    </SafeAreaView>
  );
};

export default LoginForm;
