import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import PersonCard from '../../Components/PersonCards/personCard';
import {ContactList} from '../../data/contactlist.js';
import styles from './contactsPage.style';
import {ThemeContext} from '../../utils/themeManager';

const Contacts = ({navigation}) => {
  const {theme} = React.useContext(ThemeContext);
  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
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
