import React from 'react';
import {MovieList} from '../src/components/MovieList';
// import {EncryptedStorageComponent} from '../src/components/storage/EncryptedStorage';
import renderer from 'react-test-renderer';
import {ShareComponent} from '../src/components/socialShare/ShareComponent';

it('Should render MovieList correctly', () => {
  renderer.create(<MovieList />);
});

it('Should render ShareComponent correctly', () => {
  renderer.create(<ShareComponent />);
});
