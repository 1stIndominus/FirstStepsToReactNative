import React, {useCallback, useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
// import {useDebounce} from 'use-debounce';
import {styles} from './styles';

export const EncryptedStorageComponent = () => {
  const [value, setValue] = useState('');
  const [encryptedData, setEncryptedData] = useState('');

  // const [debouncedText] = useDebounce(value, 1000);

  const handleSave = useCallback(() => {
    EncryptedStorage.setItem('key', value)
      .then(() => {
        Alert.alert('Success', 'Data saved');
        setValue('');
      })
      .catch(error => {
        console.log('Error storing data: ', error);
        Alert.alert('Error', 'Could not save data');
      });
  }, [value]);

  const handleLoad = useCallback(() => {
    EncryptedStorage.getItem('key')
      .then(data => {
        Alert.alert('Data', data);
        setEncryptedData(data);
      })
      .catch(error => {
        console.log('Error retrieving data: ', error);
        Alert.alert('Error', 'Could not retrieve data');
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Button title="Save" onPress={handleSave} />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          placeholder="Enter data to save"
        />
      </View>

      <View style={styles.wrapper}>
        <Button title="Load" onPress={handleLoad} />
        <TextInput
          value={encryptedData}
          placeholder="Stored data"
          editable={false}
          style={styles.text}
        />
      </View>
    </View>
  );
};
