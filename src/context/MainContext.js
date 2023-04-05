import { createContext, useState } from 'react';

const MainContext = createContext();

export function MainProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    const value = {
        theme, toggleTheme
    }

    return (
        <MainContext.Provider value={value}>
            {children}
        </MainContext.Provider>
    );
}

export default MainContext;