import { useContext } from 'react';
import MainContext from '../context/MainContext'
import ThemeSwitcher from './ThemeSwitcher'

function Footer() {
    const { theme } = useContext(MainContext);
    return (
        <div>
            Footer Current Theme {theme}
            <ThemeSwitcher />
        </div>
    )
}
export default Footer;