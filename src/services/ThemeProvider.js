import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const lightColors = {
  background: '#fff',
  text: '#333',
};

const darkColors = {
  background: '#333',
  text: '#fff',
};

export const ThemeContext = React.createContext({});

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});
