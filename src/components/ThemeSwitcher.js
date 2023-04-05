import { useContext } from 'react';
import MainContext from '../context/MainContext'
function ThemeSwitcher() {
    const { theme, toggleTheme } = useContext(MainContext);
    return (
        <div>
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "dark" : "light"}
            </button>
        </div>
    )
}
export default ThemeSwitcher;