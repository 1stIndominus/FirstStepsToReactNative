import React from 'react';
import renderer, {create, act} from 'react-test-renderer';
import {myScreen} from '../src/myScreen';
import {render, fireEvent} from '@testing-library/react-native';

// const tree = create(<myScreen />);

// test('button press', () => {
//   const btn = tree.root.findByProps({testID: 'myButton'}).props;
//   act(() => btn.onPress());

//   const text = tree.root.findByProps({testID: 'myText'}).props;
//   expect(text.children).toEqual('button pressed');
// });

it('should fire the onPress event when the button is pressed', () => {
  const onPressMock = jest.fn();
  const {getByTestId} = render(
    <myScreen testID="myButton" onPress={onPressMock} />,
  );
  const myButton = getByTestId('myButton');
  fireEvent.press(myButton);
  expect(onPressMock).toHaveBeenCalled();
});
