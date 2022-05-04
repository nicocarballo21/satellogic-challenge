import React from "react";

export interface ThemeDetails {
  themeName: Themes;
  bg: string;
  color: string;
}

export enum Themes {
  "DARK" = "dark",
  "LIGHT" = "light",
}

export const lightTheme: ThemeDetails = {
  themeName: Themes.LIGHT,
  bg: "#ffffff",
  color: "#1a1e22",
};

export const darkTheme: ThemeDetails = {
  themeName: Themes.DARK,
  bg: "#1a1e22",
  color: "#ffffff",
};

const ThemeContext = React.createContext({
  theme: darkTheme,
  toggleTheme: () => {},
  isDarkTheme: false,
});

export default ThemeContext;
