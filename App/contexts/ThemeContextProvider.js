import React, {createContext, useState} from 'react';
import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
  } from "@react-navigation/native";
  import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
  } from "react-native-paper";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const customDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#eee",
      text: "#333",
      tagBg: '#e5e5e5',
      tagText: '#666',
      black: '#000',
      placeholder: '#999999'
    },
  };

  const customDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333",
      text: "#eee",
      tagBg: '#e5e5e5',
      tagText: '#666',
      black: '#000',
      placeholder: '#999999'
    },
  };

  const theme = isDarkTheme ? customDarkTheme : customDefaultTheme;

     const changeTheme = () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      };

    return (
       <ThemeContext.Provider value={{theme, changeTheme}}>
           {props.children}
       </ThemeContext.Provider>
    )
}
