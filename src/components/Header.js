import { useContext } from 'react';
import MainContext from '../context/MainContext'
function Header() {
    const { theme, toggleTheme } = useContext(MainContext);
    return (
        <div>
            <div>
                <button onClick={toggleTheme}>
                    Switch to {theme === "light" ? "dark" : "light"}
                </button>
                Header Current Theme {theme}
            </div>
        </div>
    )
}
export default Header;