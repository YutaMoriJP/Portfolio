import React from "react";
import useLocalStorage, { getStorage } from "../hooks/useLocalStorage";

const ThemeContext = React.createContext();
export const useThemeContext = () => React.useContext(ThemeContext);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(() => {
    const storedTheme = getStorage("ymThemeContext");

    return storedTheme === null ? "dark" : storedTheme;
  });

  const { clear: clearStorage } = useLocalStorage("ymThemeContext", theme);

  const clear = React.useCallback(() => clearStorage(), [clearStorage]);

  const value = React.useMemo(() => {
    return [theme, setTheme, clear];
  }, [theme, clear]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
