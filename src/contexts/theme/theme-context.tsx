"use client";

import {
  SetStateAction,
  createContext,
  useState,
  Dispatch,
  PropsWithChildren,
  useContext,
  useCallback,
  useEffect,
} from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  toggleTheme: () => void;
};

const storageThemeKey = "user-preferences:theme";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeContextType["theme"]>("dark");

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);

  useEffect(() => {
    const currentTheme = (localStorage.getItem(storageThemeKey) ??
      "dark") as Theme;

    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem(storageThemeKey, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
