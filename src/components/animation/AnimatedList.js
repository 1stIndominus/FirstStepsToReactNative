import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export const AnimatedList = React.memo(({familyName, isVisible, givenName}) => {
  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);

  return (
    <Animated.View
      style={[
        {
          height: 80,
          width: '90%',
          backgroundColor: '#78CAD2',
          alignSelf: 'center',
          borderRadius: 15,
          marginTop: 20,
        },
        rStyle,
      ]}>
      <View style={styles.container}>
        <Text style={styles.text}>{givenName}</Text>
        <Text style={styles.text}>{familyName}</Text>
      </View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 4,
    paddingLeft: 20,
  },
  text: {
    paddingBottom: 10,
    color: '#fff',
    fontSize: 16,
  },
});
