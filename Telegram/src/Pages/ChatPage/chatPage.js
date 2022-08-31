import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const ChatPage = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <SafeAreaView>
      <Text>{item.name}</Text>
    </SafeAreaView>
  );
};

export default ChatPage;
