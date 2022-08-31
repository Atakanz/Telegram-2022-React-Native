import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ThemeContext} from '../../utils/themeManager';
import styles from './Buttons.style';

const Buttons = ({name, task}) => {
  const {theme} = React.useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={[styles.button, styles[`button${theme}`]]}
      onPress={task}>
      <Text style={[styles.text, styles[`text${theme}`]]}>{name}</Text>
    </TouchableOpacity>
  );
};
export default Buttons;
