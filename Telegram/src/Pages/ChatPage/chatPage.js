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

const phone = <Icon name="phone" size={30} color="black" />;
const dots = <Icon name="dots-vertical" size={30} color="black" />;
const smile = <Icon name="emoticon-excited-outline" size={25} color="gray" />;
const paperClip = <Icon name="paperclip" size={25} color="gray" />;

const ChatPage = ({route, navigation}) => {
  const {message} = React.useContext(MessageContext);
  const {newMessage} = React.useContext(MessageContext);
  const {messageDesigner} = React.useContext(MessageContext);
  const {messageSender} = React.useContext(MessageContext);
  const {receiver} = React.useContext(ReceiverContext);
  const {setReceiver} = React.useContext(ReceiverContext);
  const {item} = route.params;
  const delText = () => {
    messageDesigner(' ');
  };
  const sent = (
    <Icon.Button
      name="send"
      style={styles.sendButton}
      size={25}
      color="#3390ec"
      onPress={() => {
        messageSender();
        delText();
        setReceiver([item.name, item.image]);
      }}
    />
  );
  return (
    <SafeAreaView style={styles.enableDirection}>
      <TopBar src={item.image} name={item.name} icon1={phone} icon2={dots} />
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/telegrambackground.jpg')}
          // Imagebackground view is choosed for messaging area.
          resizeMode="cover"
          style={styles.image}>
          <FlatList
            data={message}
            renderItem={({item}) => <MessageUnit message={item} />}
          />
          <View style={styles.bottomBar}>
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
