import React from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
import {ReceiverContext} from '../../utils/receiverManager';
import {MessageContext} from '../../utils/messageBoxManager';
import {ThemeContext} from '../../utils/themeManager';
import TopBar from '../../Components/topBar/topBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MessageListCard from '../../Components/MessageListCards/MessageListCards';
import styles from './messageListPage.style';

const MessageList = () => {
  const {receiver} = React.useContext(ReceiverContext);
  const {message} = React.useContext(MessageContext);
  const {theme} = React.useContext(ThemeContext);
  const {lastMessageItem} = React.useContext(MessageContext);
  const colorSelect = theme === 'Dark' ? 'white' : '#212121';
  const magnify = <Icon name="magnify" size={25} color={colorSelect} />;
  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
      <TopBar name="Telegram" icon3={magnify} />
      <Text>{receiver.id}</Text>
      <View style={styles.container}>
        {/* <View style={styles.container}></View> */}
        <FlatList
          data={receiver}
          renderItem={({item}) => (
            <MessageListCard
              name={item.name}
              link={item.image}
              lastMessage={lastMessageItem}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default MessageList;
