import React, { useState, useContext, createContext } from "react";

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
