import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [darkMode, setDarkMode] = useState();
  return <MyContext.Provider value={{ nome }}>{children}</MyContext.Provider>;
};
