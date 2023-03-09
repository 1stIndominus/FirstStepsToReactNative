import React, {useMemo} from 'react';
import {BackButton} from './buttons/BackButton';
import {OpenMapButton} from './buttons/OpenMapButton';

export const Navbar = ({navigation, main = false}) => {
  const Button = useMemo(() => {
    return main ? OpenMapButton : BackButton;
  }, [main]);

  return <Button navigation={navigation} />;
};
