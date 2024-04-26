import { createContext, useState } from "react";
import React from "react";
interface ThemeContext {
  theme: string;
  toggleTheme: () => void;
}
const themeContext = createContext<ThemeContext | null>(null);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const toggleTheme = () => {
    setTheme((old) => {
      const newTheme = old === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

const useThemeContext = () => {
  const context = React.useContext(themeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};

export { ThemeContextProvider, useThemeContext };
