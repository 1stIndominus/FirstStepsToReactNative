import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import Contacts from 'react-native-contacts';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import {PermissionsAndroid} from 'react-native';

export const GetContactComponent = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(
      Contacts.getAll()
        .then(contact => {
          setContacts(contact);
        })
        .catch(e => {
          console.log(e);
        }),
    );
  }, []);

  return (
    <LinearGradient
      colors={['#D9AFD9', '#97D9E1', '#FFFFFF']}
      style={{flex: 1, justifyContent: 'center'}}>
      <FlatList
        data={contacts}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Text style={styles.text}>
              {`${item.givenName}`} {`${item.familyName}`}
            </Text>
          </View>
        )}
        numColumns={1}
        keyExtractor={(item, index) => index}
      />
    </LinearGradient>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'lightgrey',
    margin: 4,
    paddingLeft: 20,
  },
  text: {
    paddingBottom: 10,
    color: '#773232',
    fontSize: 16,
  },
});
