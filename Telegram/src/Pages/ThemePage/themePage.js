import React from 'react';
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {ThemeContext} from '../../utils/themeManager';
import styles from './themePage.style';

const ThemePage = () => {
  const {toggleTheme} = React.useContext(ThemeContext);
  const {theme} = React.useContext(ThemeContext);
  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
      <TouchableOpacity
        style={[styles.button, styles[`button${theme}`]]}
        onPress={toggleTheme}>
        <Text style={[styles.text, styles[`text${theme}`]]}>{theme}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ThemePage;
