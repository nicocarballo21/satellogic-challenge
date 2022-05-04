import React, { useEffect, useState } from "react";
import ThemeContext, {
  darkTheme,
  ThemeDetails,
  whiteTheme,
  Themes,
} from "./ThemeContext";
import ThemeProviderProps from "./ThemeProvider.d";

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const isDarkTheme = window.localStorage.getItem("darkTheme") === Themes.DARK;
  const [theme, setTheme] = useState<ThemeDetails>(whiteTheme);

  useEffect(() => {
    if (isDarkTheme) return setTheme(darkTheme);

    return setTheme(whiteTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    const theme = isDarkTheme ? whiteTheme : darkTheme;
    setTheme(theme);
    window.localStorage.setItem("darkTheme", theme.themeName);
  };

  const value = { theme, toggleTheme, isDarkTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
