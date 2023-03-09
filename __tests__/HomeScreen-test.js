import React from 'react';
import {HomeScreen} from '../src/screens/HomeScreen';
import renderer, {create} from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

describe('NavBar', () => {
  it('should navigate to Map when the button is pressed', () => {
    const {getByTestId} = render(<HomeScreen />);
    const button = getByTestId('getContact');

    // Fire the "onPress" event of the button
    fireEvent.press(button);

    // Check if the navigation to OtherPage has occurred
    const otherPageTitle = getByTestId('Get Contact');
    expect(otherPageTitle).toBeTruthy();
  });
});
