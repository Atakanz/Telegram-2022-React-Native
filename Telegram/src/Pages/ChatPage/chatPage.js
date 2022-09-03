import React from 'react';
import {
  SafeAreaView,
  TextInput,
  FlatList,
  View,
  ImageBackground,
} from 'react-native';
import moment from 'moment';
import TopBar from '../../Components/topBar/topBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MessageUnit from '../../Components/MessageBoxes/messageBoxes';
import styles from './chatPage.style';
import {ThemeContext} from '../../utils/themeManager';
import {ContactList} from '../../data/contactlist.js';
import {ReceiverContext} from '../../utils/receiverManager';

const ChatPage = ({route, navigation}) => {
  const {theme} = React.useContext(ThemeContext);
  const {item} = route.params;
  const [newMessage, setNewMessage] = React.useState(' ');
  const {setReceiverArray} = React.useContext(ReceiverContext);
  const {receiverArray} = React.useContext(ReceiverContext);
  const {onlyContacts} = React.useContext(ReceiverContext);
  const {setOnlyContacts} = React.useContext(ReceiverContext);

  const colorSelect = theme === 'Dark' ? '#fff' : '#212121';

  const phone = <Icon name="phone" size={25} color={colorSelect} />;
  const dots = <Icon name="dots-vertical" size={25} color={colorSelect} />;
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
  const smile = (
    <Icon name="emoticon-excited-outline" size={25} color={colorSelect} />
  );
  const paperClip = <Icon name="paperclip" size={25} color={colorSelect} />;
  // setIndexOfContact(ContactList.indexOf(item));
  const indexContact = ContactList.indexOf(item);
  const sent = (
    <Icon.Button
      name="send"
      style={[styles.ıconButton, styles[`ıconButton${theme}`]]}
      size={25}
      color="#3390ec"
      onPress={() => {
        const newUsers = ContactList.map(user => {
          if (user.id === item.id) {
            const newMessages = user.messages.push({
              text: newMessage,
              date: moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSSZZ'),
            });
            return {
              ...user,
              messages: newMessages,
            };
          } else {
            return user;
          }
        });
        setReceiverArray(newUsers);
        setOnlyContacts(oldArray => [...oldArray, {name: item.name}]);
      }}
    />
  );

  return (
    <SafeAreaView style={styles.enabledDirection}>
      <TopBar
        src={item.image}
        name={item.name}
        icon1={goBack}
        icon2={phone}
        icon3={dots}
      />
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
            data={ContactList[indexContact].messages}
            renderItem={({item}) => <MessageUnit message={item.text} />}
          />
          <View style={[styles.bottomBar, styles[`bottomBar${theme}`]]}>
            <View>{smile}</View>
            <TextInput
              style={styles.textInput}
              label="Mesaj"
              placeholder="Mesaj"
              onChangeText={setNewMessage}
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
