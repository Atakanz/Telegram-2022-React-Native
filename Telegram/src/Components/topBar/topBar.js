import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {ThemeContext} from '../../utils/themeManager';
import styles from './topBar.style';

const TopBar = ({src, name, icon1, icon2}) => {
  return (
    <SafeAreaView style={styles.enabledDirection}>
      <View style={styles.directionRow}>
        <View style={styles.textImage}>
          {src && <Image source={src} style={styles.img} />}
          {/* if src prop is not passed, not show the place of image as space. */}
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.rightIcon}>
          <View>{icon1}</View>
          <View style={styles.secondIcon}>{icon2}</View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default TopBar;
