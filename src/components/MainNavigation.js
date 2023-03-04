import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Navbar} from './NavBar';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {GeolocationComponent} from './geolocation/GeolocationComponent';
import {GetContactComponent} from './getContact/GetContactComponent';
const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator headerMode={'screen'}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTransparent: true,
          header: ({navigation}) => (
            <Navbar navigation={navigation} main={true} />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerTransparent: true,
          header: ({navigation}) => (
            <Navbar main={false} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Map"
        component={GeolocationComponent}
        options={{
          headerTransparent: true,
          header: ({navigation}) => (
            <Navbar main={false} navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="Get Contact"
        component={GetContactComponent}
        options={{
          headerTransparent: true,
          header: ({navigation}) => (
            <Navbar contact={false} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
