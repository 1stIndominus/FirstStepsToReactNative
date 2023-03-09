import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, Animated, Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export const SplashScreenComponent = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    SplashScreen.hide();
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [opacity, scale]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/images/10.png')}
        style={[styles.logo, {opacity: opacity, transform: [{scale: scale}]}]}
        resizeMode="contain"
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
  },
  logo: {
    width: 200,
    height: 200,
  },
});
