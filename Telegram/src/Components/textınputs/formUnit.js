import React from 'react';
import {TextInput} from 'react-native';
import {ThemeContext} from '../../utils/themeManager';
import styles from './formUnits.style';

const FormUnit = props => {
  const {theme} = React.useContext(ThemeContext);
  return (
    <TextInput
      style={[styles.formUnit, [styles[`formUnit${theme}`]]]}
      label={props.labelName}
      placeholder={props.holder}
      placeholderTextColor={theme === 'Light' ? '#212121' : 'white'}
      onChangeText={props.task}
      text
    />
  );
};

export default FormUnit;
