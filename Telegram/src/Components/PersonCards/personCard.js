import React from 'react';
import {SafeAreaView, TouchableOpacity, Image, Text, View} from 'react-native';
import {ThemeContext} from '../../utils/themeManager';
import styles from './personCard.style';

const PersonCard = props => {
  const {theme} = React.useContext(ThemeContext);
  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
      <TouchableOpacity onPress={props.task}>
        <View style={styles.enabledDirection}>
          <View style={styles.viewImg}>
            <Image source={props.link} style={styles.img} />
          </View>
          <View style={[styles.textView, styles[`textView${theme}`]]}>
            <Text style={[styles.textInfo, styles[`text${theme}`]]}>
              {props.name} {props.surname}
            </Text>
            <Text style={[styles.textState, styles[`text${theme}`]]}>
              {props.state}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PersonCard;
