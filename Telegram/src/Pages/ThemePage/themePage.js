import React from 'react';
import {SafeAreaView, TouchableOpacity, Text, View} from 'react-native';
import {ThemeContext} from '../../utils/themeManager';
import styles from './themePage.style';
import TopBar from '../../Components/topBar/topBar';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ThemePage = ({navigation}) => {
  const {toggleTheme} = React.useContext(ThemeContext);
  const {theme} = React.useContext(ThemeContext);

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
  const compare = <Icon name="compare" size={25} color={colorSelect} />;

  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
      <TopBar name="Theme settings" icon1={goBack} icon3={compare} />
      <View style={styles.touchableView}>
        <TouchableOpacity
          style={[styles.button, styles[`button${theme}`]]}
          onPress={toggleTheme}>
          <Text style={[styles.text, styles[`text${theme}`]]}>{theme}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ThemePage;
