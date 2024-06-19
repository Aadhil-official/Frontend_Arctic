// ThemeProvider.js
import React, { useState, createContext, useContext } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

// Define your themes
const lightTheme = createTheme({
  palette: {
    background: {
      default: '#ffffff',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    background: {
      default: '#333333',
    },
  },
});

// Create a context to manage the theme state
const ThemeContext = createContext();

// Custom hook to access the theme context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to wrap the application and provide theme functionality
export const ThemeProvider = ({ children }) => {
  // State to manage the theme mode (light or dark)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Determine the current theme based on the theme mode
  const theme = isDarkMode ? darkTheme : lightTheme;

  // Provide the theme context and toggleTheme function to its children
  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {/* Wrap the application with MuiThemeProvider to apply the selected theme */}
      <MuiThemeProvider theme={theme}>
        {/* Render the children components */}
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
