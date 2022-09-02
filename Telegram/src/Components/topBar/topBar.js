import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {ThemeContext} from '../../utils/themeManager';
import styles from './topBar.style';

const TopBar = ({src, name, icon1, icon2, icon3}) => {
  const {theme} = React.useContext(ThemeContext);
  return (
    <SafeAreaView
      style={[styles.enabledDirection, styles[`enabledDirection${theme}`]]}>
      <View style={styles.directionRow}>
        {icon1 && <View style={styles.firstIcon}>{icon1}</View>}
        <View style={styles.textImage}>
          {src && <Image source={src} style={styles.img} />}
          {/* if src prop is not passed, not show the place of image as space. */}
          <Text style={[styles.text, styles[`text${theme}`]]}>{name}</Text>
        </View>
        <View style={styles.rightIcon}>
          <View>{icon2}</View>
          <View style={styles.secondIcon}>{icon3}</View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default TopBar;
