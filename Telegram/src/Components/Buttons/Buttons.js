import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../utils/themeManager';
import styles from './Buttons.style';

const Buttons = ({name, task, screenName}) => {
  const {theme} = React.useContext(ThemeContext);
  const navigation = useNavigation();
  const sendRoute = () => navigation.navigate(screenName);
  return (
    <TouchableOpacity
      style={[styles.button, styles[`button${theme}`]]}
      onPress={() => {
        task();
        sendRoute();
      }}>
      <Text style={[styles.text, styles[`text${theme}`]]}>{name}</Text>
    </TouchableOpacity>
  );
};
export default Buttons;
