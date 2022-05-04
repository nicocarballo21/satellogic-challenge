import React from "react";

export interface ThemeDetails {
  themeName: Themes;
  bg: string;
  color: string;
}

export enum Themes {
  "DARK" = "dark",
  "WHITE" = "white",
}

export const whiteTheme: ThemeDetails = {
  themeName: Themes.WHITE,
  bg: "white",
  color: "black",
};

export const darkTheme: ThemeDetails = {
  themeName: Themes.DARK,
  bg: "black",
  color: "white",
};

const ThemeContext = React.createContext({
  theme: darkTheme,
  toggleTheme: () => {},
  isDarkTheme: false,
});

export default ThemeContext;
