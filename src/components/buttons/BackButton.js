import React from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
// import Svg, {Path} from 'react-native-svg';
import Left from '../../../assets/icons/icon-arrow-left.svg';

export const BackButton = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        {/* <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 3L3 12M3 12L12 21M3 12H21"
            stroke={'#fff'}
            strokeWidth={2}
            strokeLinecap="round"
          />
        </Svg> */}
        <Left width={40} height={40} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 15,
    left: 20,
  },
});
