import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {styles} from './styles';

export let typeOfConection = '';

export const NetInfoUsage = () => {
  const [isConnected, setIsConnected] = useState(null);
  const [connectionType, setConnectionType] = useState(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      setConnectionType(state.type);
      if (state.type) {
        typeOfConection = `You are connected via: ${state.type}`;
      } else {
        typeOfConection = 'You are not connected to the internet.';
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      {isConnected === null ? (
        <Text>Loading...</Text>
      ) : isConnected ? (
        <Text style={styles.text}>You are connected via {connectionType}.</Text>
      ) : (
        <Text style={styles.text}>You are not connected to the internet.</Text>
      )}
    </View>
  );
};
