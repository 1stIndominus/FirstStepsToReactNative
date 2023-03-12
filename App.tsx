import React, {useRef, useCallback, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './src/navigation/MainNavigation';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import BottomSheet, {
  BottomSheetRefProps,
} from './src/components/BottomSheet/BottomSheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {SplashScreenComponent} from './src/screens/SplashScreenComponent';

export function App() {
  // const [isLoading, setIsLoading] = useState(true);

  const ref = useRef<BottomSheetRefProps>(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-1000);
    }
  }, []);

  // if (isLoading) {
  //   return <SplashScreenComponent setIsLoading={setIsLoading} />;
  // }

  return (
    <>
      <NavigationContainer>
        <MainNavigation />
        <GestureHandlerRootView>
          <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
              <BottomSheet ref={ref}>
                <View style={{flex: 1, backgroundColor: 'grey'}} />
              </BottomSheet>
            </TouchableOpacity>
          </View>
        </GestureHandlerRootView>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 8,
    backgroundColor: '#fff',
    opacity: 0.8,
  },
});

export default App;
