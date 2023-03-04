import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

export const PlayButton = ({handlePress}) => {
  return (
    <Pressable onPress={() => handlePress()} style={styles.button}>
      <View style={styles.triangle} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    borderRadius: 50,
    width: 50,
    height: 50,
    padding: 10,
    backgroundColor: '#0093E9',
  },
  triangle: {
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderRightWidth: 0,
    borderLeftWidth: 15,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'white',
    marginLeft: 10,
    marginTop: 5,
  },
});
