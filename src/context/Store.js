import React, { useState, createContext, useContext } from "react";
const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  const [dark, setDark] = context.dark;

  const handleDark = () => {
    if (dark === "dark") {
      setDark("");
    }
    if (dark === "") {
      setDark("dark");
    }
  };
  return {
    handleDark,
    dark,
  };
};

export const Store = ({ children }) => {
  const [dark, setDark] = useState("");
  return (
    <AppContext.Provider
      value={{
        dark: [dark, setDark],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
