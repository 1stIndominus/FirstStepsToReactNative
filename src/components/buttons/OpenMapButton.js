import React from 'react';
import {View, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import MapIcon from '../../../assets/icons/google-maps.svg';

export const OpenMapButton = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.mainNav}>
        <TouchableOpacity
          testID="myButton"
          onPress={() => {
            navigation.navigate('Map');
          }}>
          <MapIcon width={40} height={40} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainNav: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  logo: {
    width: 25,
    height: 25,
  },
});
