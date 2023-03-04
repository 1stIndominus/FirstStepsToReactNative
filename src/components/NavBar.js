import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export const Navbar = ({navigation, main = false}) => {
  return (
    <SafeAreaView>
      {main ? (
        <View style={styles.mainNav}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Map');
            }}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/movies.png')}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
              <Path
                d="M12 3L3 12M3 12L12 21M3 12H21"
                stroke={'#fff'}
                strokeWidth={2}
                strokeLinecap="round"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      )}
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
