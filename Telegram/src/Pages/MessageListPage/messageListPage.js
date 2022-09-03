import React from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
import {ThemeContext} from '../../utils/themeManager';
import {ReceiverContext} from '../../utils/receiverManager';
import TopBar from '../../Components/topBar/topBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MessageListCard from '../../Components/MessageListCards/MessageListCards';
import styles from './messageListPage.style';

const MessageList = () => {
  const {receiverArray} = React.useContext(ReceiverContext);
  const {onlyContacts} = React.useContext(ReceiverContext);
  const {theme} = React.useContext(ThemeContext);
  const colorSelect = theme === 'Dark' ? 'white' : '#212121';
  const magnify = <Icon name="magnify" size={25} color={colorSelect} />;

  let filteredArray = receiverArray.filter(contact => {
    return onlyContacts.some(item => {
      return item.name === contact.name;
    });
  });

  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
      <TopBar name="Telegram" icon3={magnify} />
      <View style={styles.container}>
        <FlatList
          data={filteredArray}
          renderItem={({item}) => (
            <MessageListCard
              name={item.name}
              link={item.image}
              lastMessage={item.messages}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default MessageList;
