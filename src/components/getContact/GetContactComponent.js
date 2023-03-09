import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Contacts from 'react-native-contacts';
import LinearGradient from 'react-native-linear-gradient';
import {PermissionsAndroid} from 'react-native';
import {AnimatedList} from '../animation/AnimatedList';

export const GetContactComponent = () => {
  const [contacts, setContacts] = useState([]);

  const permisionRequest = useCallback(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    })
      .then(
        Contacts.getAll().then(contact => {
          setContacts(contact);
        }),
      )
      .catch(e => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    permisionRequest();
  }, [permisionRequest]);

  return (
    <LinearGradient
      colors={['#D9AFD9', '#97D9E1', '#FFFFFF']}
      style={{flex: 1, justifyContent: 'center'}}>
      <FlatList
        data={contacts}
        renderItem={({item}) => (
          <AnimatedList
            item={item}
            isVisible={true}
            givenName={item.givenName}
            familyName={item.familyName}
          />
        )}
        numColumns={1}
        keyExtractor={(item, index) => index}
      />
    </LinearGradient>
  );
};
