import React from "react";
import useLocalStorage, { getStorage } from "../useHooks/useLocalStorage";

const ThemeContext = React.createContext();
export const useThemeContext = () => React.useContext(ThemeContext);

const ThemeContextProvider = ({ children }) => {
  console.log("<ThemeContextProvider/> called");
  const [theme, setTheme] = React.useState(() => {
    console.log("context state is initialized");
    const storedTheme = getStorage("ymThemeContext");
    return storedTheme === null ? "dark" : storedTheme;
  });
  const { clear: clearStorage } = useLocalStorage("ymThemeContext", theme);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const clear = React.useCallback(() => clearStorage(), []);
  const value = React.useMemo(() => {
    console.log("useMemo called");
    return [theme, setTheme, clear];
  }, [theme, clear]);
  console.log("<ThemeContextProvider/> renders");
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

/*

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const ContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  return (
    <GlobalContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default ContextProvider;
*/
