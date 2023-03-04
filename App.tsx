import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './src/components/MainNavigation';
// import BottomPanel from './src/screens/BottomPanel';

export function App() {
  return (
    <>
      <NavigationContainer>
        <MainNavigation />
        {/* <BottomPanel /> */}
      </NavigationContainer>
    </>
  );
}

export default App;
