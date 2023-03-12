import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const NavigationView = ({
  onBackPress,
  onForwardPress,
  ableBack,
  ableForward,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onBackPress}>
        <Text style={styles.buttonTitle}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onForwardPress}>
        <Text style={styles.buttonTitle}>Forward</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    height: 90,
    justifyContent: 'space-around',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 20,
  },
  button: {},
});

export default NavigationView;
