import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import PersonCard from '../../Components/PersonCards/personCard';
import {ContactList} from '../../data/contactlist.js';
import styles from './contactsPage.style';
import {ThemeContext} from '../../utils/themeManager';
import {ReceiverContext} from '../../utils/themeManager';

import TopBar from '../../Components/topBar/topBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const magnify = <Icon name="magnify" size={25} color="black" />;
const horizontal = (
  <Icon name="align-horizontal-left" size={25} color="black" />
);
const Contacts = ({navigation}) => {
  const {theme} = React.useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
      <TopBar name="Kişiler" icon1={magnify} icon2={horizontal} />
      <FlatList
        data={ContactList}
        renderItem={({item}) => (
          <PersonCard
            name={item.name}
            surname={item.surname}
            link={item.image}
            state={item.lastSeen}
            task={() => navigation.navigate('ChatPage', {item})}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Contacts;
