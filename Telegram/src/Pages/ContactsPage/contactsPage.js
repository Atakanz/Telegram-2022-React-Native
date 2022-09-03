import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import PersonCard from '../../Components/PersonCards/personCard';
import {ContactList} from '../../data/contactlist.js';
import styles from './contactsPage.style';
import {ThemeContext} from '../../utils/themeManager';
import TopBar from '../../Components/topBar/topBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Contacts = ({navigation}) => {
  const {theme} = React.useContext(ThemeContext);
  const colorSelect = theme === 'Dark' ? '#fff' : '#212121';
  const magnify = <Icon name="magnify" size={25} color={colorSelect} />;
  const horizontal = (
    <Icon name="align-horizontal-left" size={25} color={colorSelect} />
  );

  return (
    <SafeAreaView style={[styles.container, styles[`container${theme}`]]}>
      <TopBar name="Contacts" icon2={magnify} icon3={horizontal} />
      <FlatList
        data={ContactList}
        renderItem={({item}) => (
          <PersonCard
            name={item.name}
            surname={item.surname}
            link={item.image}
            state={item.lastSeen}
            task={() => {
              navigation.navigate('ChatPage', {item});
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Contacts;
