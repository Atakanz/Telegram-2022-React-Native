import React from 'react';
import {SafeAreaView, TouchableOpacity, Image, Text, View} from 'react-native';
import {ThemeContext} from '../../utils/themeManager';
import styles from './MessageListCards.style';

const MessageListCard = props => {
  const {theme} = React.useContext(ThemeContext);
  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
      <TouchableOpacity>
        <View style={styles.enabledDirection}>
          <View style={styles.viewImg}>
            <Image source={props.link} style={styles.img} />
          </View>
          <View style={[styles.textView, styles[`textView${theme}`]]}>
            <View>
              <Text style={[styles.textInfo, styles[`text${theme}`]]}>
                {props.name}
              </Text>
            </View>
            <View style={styles.textMessageView}>
              <Text style={[styles.textMessage, styles[`text${theme}`]]}>
                {props.lastMessage[props.lastMessage.length - 1].text}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MessageListCard;
