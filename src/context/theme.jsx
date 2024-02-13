import React, { useState, createContext, useEffect } from "react";

const ThemeContext = createContext({})

const ThemeProvider = ({children}) =>{

  const [theme, setTheme] = useState(false)

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
export {ThemeContext, ThemeProvider}