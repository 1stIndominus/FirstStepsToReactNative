/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
// import {Card} from '../src/components/Card';
import {Navbar} from '../src/components/NavBar';
// Note: test renderer must be required after react-native.
import renderer, {create} from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

// // if my component navigate properly
// const navigation = {
//   navigate: jest.fn(),
// };

// const nav = create(<Navbar navigation={navigation} />);

// test('navigate to Map screen', () => {
//   const btn = nav.root.findByProps({testID: 'MyButton'}).props;
//   btn.onPress();

//   expect(navigation.navigate).toBeCalledWith('Map');
// });
