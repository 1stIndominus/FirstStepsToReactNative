import React, {useCallback, useRef, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import NavigationView from '../../navigation/NavigationView';
import {useInsertionEffect} from 'react';

const SOURCE = 'https://google.com';
const HTML = '<h1>Hello everybody</h1>';

export const ContentView = () => {
  const webViewRef = useRef();
  const [ableBack, setAbleBack] = useState(false);
  const [ableForward, setAbleForward] = useState(false);

  const htmlContent = '<h1>Hello, World!</h1><p>This is some HTML content.</p>';

  const handleBackPress = useCallback(() => {
    webViewRef.current.goBack();
  }, []);

  const handleForwarPress = useCallback(() => {
    webViewRef.current.goForward();
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: SOURCE}}
        originWhitelist={['*']}
        ref={webViewRef}
        onNavigationStateChange={state => {
          const back = state.ableBack;
          const forward = state.ableForward;
          setAbleBack(back);
          setAbleForward(forward);
        }}
      />
      <NavigationView
        onBackPress={handleBackPress}
        onForwardPress={handleForwarPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alightItems: 'center',
    // backgroundColor: '#ecf0f1',
    // padding: 8,
    marginTop: 50,
  },
});
