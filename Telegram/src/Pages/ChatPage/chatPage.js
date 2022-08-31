import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import TopBar from '../../Components/topBar/topBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const phone = <Icon name="phone" size={30} color="black" />;
const dots = <Icon name="dots-vertical" size={30} color="black" />;

const ChatPage = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <SafeAreaView>
      <TopBar src={item.image} name={item.name} icon1={phone} icon2={dots} />
    </SafeAreaView>
  );
};

export default ChatPage;
