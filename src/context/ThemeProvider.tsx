import React, { useEffect, useState } from "react";
import ThemeContext, {
  darkTheme,
  ThemeDetails,
  lightTheme,
  Themes,
} from "./ThemeContext";
import ThemeProviderProps from "./ThemeProvider.d";

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const isDarkTheme = window.localStorage.getItem("darkTheme") === Themes.DARK;
  const [theme, setTheme] = useState<ThemeDetails>(lightTheme);

  useEffect(() => {
    if (isDarkTheme) return setTheme(darkTheme);
    return setTheme(lightTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    const themeToSet = isDarkTheme ? lightTheme : darkTheme;
    setTheme(themeToSet);
    window.localStorage.setItem("darkTheme", themeToSet.themeName);
  };

  const value = { theme, toggleTheme, isDarkTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
