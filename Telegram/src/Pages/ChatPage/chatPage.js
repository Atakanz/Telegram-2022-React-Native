import React from 'react';
import {
  SafeAreaView,
  TextInput,
  FlatList,
  View,
  ImageBackground,
} from 'react-native';
import TopBar from '../../Components/topBar/topBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MessageContext} from '../../utils/messageBoxManager';
import MessageUnit from '../../Components/MessageBoxes/messageBoxes';
import styles from './chatPage.style';
import {ReceiverContext} from '../../utils/receiverManager';
import {ThemeContext} from '../../utils/themeManager';

const ChatPage = ({route, navigation}) => {
  const {message} = React.useContext(MessageContext);
  const {newMessage} = React.useContext(MessageContext);
  const {messageDesigner} = React.useContext(MessageContext);
  const {messageSender} = React.useContext(MessageContext);
  const {setReceiver} = React.useContext(ReceiverContext);
  const {theme} = React.useContext(ThemeContext);
  const {item} = route.params;

  const colorSelect = theme === 'Dark' ? 'white' : '#212121';

  const phone = <Icon name="phone" size={25} color={colorSelect} />;
  const dots = <Icon name="dots-vertical" size={25} color={colorSelect} />;
  const smile = (
    <Icon name="emoticon-excited-outline" size={25} color={colorSelect} />
  );
  const paperClip = <Icon name="paperclip" size={25} color={colorSelect} />;
  const delText = () => {
    messageDesigner(' ');
  };
  const sent = (
    <Icon.Button
      name="send"
      style={[styles.sendButton, styles[`sendButton${theme}`]]}
      size={25}
      color="#3390ec"
      onPress={() => {
        messageSender();
        delText();
        setReceiver(oldArray => [
          ...oldArray,
          {id: item.id, name: item.name, image: item.image},
        ]);
      }}
    />
  );
  return (
    <SafeAreaView style={styles.enabledDirection}>
      <TopBar src={item.image} name={item.name} icon1={phone} icon2={dots} />
      <View style={styles.container}>
        <ImageBackground
          source={
            theme === 'Light'
              ? require('../../assets/telegrambackground.jpg')
              : require('../../assets/backgroundDark.jpg')
          }
          // Imagebackground view is choosed for messaging area.
          resizeMode="cover"
          style={styles.image}>
          <FlatList
            data={message}
            renderItem={({item}) => <MessageUnit message={item} />}
          />
          <View style={[styles.bottomBar, styles[`bottomBar${theme}`]]}>
            <View>{smile}</View>
            <TextInput
              style={styles.textInput}
              label="Mesaj"
              placeholder="Mesaj"
              value={newMessage}
              onChangeText={messageDesigner()}
            />
            <View>{paperClip}</View>
            <View>{sent}</View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default ChatPage;
