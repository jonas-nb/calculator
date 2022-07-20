import React, { createContext, useState } from 'react'

export const MyContext = createContext()

export const GlobalStorage = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <MyContext.Provider value={{ setDarkMode, darkMode }}>
            {children}
        </MyContext.Provider>
    )
}
