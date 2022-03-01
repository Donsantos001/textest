import React, { useContext, useState } from 'react'
const ThemeContext = React.createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false)
    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
    }
    const themeProps = {
        darkTheme: darkTheme,
        toggleTheme: toggleTheme
    }

    return (
        <ThemeContext.Provider value={themeProps}>
            {children}
        </ThemeContext.Provider>
    )
}