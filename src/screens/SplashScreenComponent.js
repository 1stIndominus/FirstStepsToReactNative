import React, {useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

export const SplashScreenComponent = ({setIsLoading}) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/lf20_krwnlt9d.json')}
        autoPlay
        loop={false}
        resizeMode="cover"
        onAnimationFinish={() => setIsLoading(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  logo: {
    width: 200,
    height: 200,
  },
});
