import React, { useCallback, useEffect, useState } from "react";
import ThemeContext, {
  darkTheme,
  ThemeDetails,
  lightTheme,
  Themes,
} from "./ThemeContext";
import ThemeProviderProps from "./ThemeProvider.d";

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const isDarkThemeFromSystem = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const themeFromLocalStorage = window.localStorage.getItem("darkTheme");

  const getThemeConfig = useCallback(() => {
    if (!themeFromLocalStorage) {
      if (isDarkThemeFromSystem) return darkTheme;

      return lightTheme;
    }

    if (themeFromLocalStorage === Themes.DARK) return darkTheme;
    return lightTheme;
  }, [isDarkThemeFromSystem, themeFromLocalStorage]);

  const [theme, setTheme] = useState<ThemeDetails>(getThemeConfig());

  useEffect(() => {
    setTheme(getThemeConfig());
  }, [getThemeConfig]);

  const toggleTheme = () => {
    const themeToSet = isDarkTheme ? lightTheme : darkTheme;
    setTheme(themeToSet);
    window.localStorage.setItem("darkTheme", themeToSet.themeName);
  };

  const isDarkTheme = theme.themeName === Themes.DARK;

  const value = { theme, toggleTheme, isDarkTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
