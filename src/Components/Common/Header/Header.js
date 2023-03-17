import { NavLink } from 'react-router-dom'
import Style from './Header.module.css'
import Logo from './Logo/Logo'
import Search from './Search/Search'
import Cookies from 'universal-cookie'

function Header() {
    const cookies = new Cookies()

    return (
        <header className={`${Style['header']}`}>
            <div className="container">
                <div className={`${Style['header__content']}`}>
                    <Logo />
                    <NavLink to={'/'} >
                        Main
                    </NavLink>
                    <Search />
                    
                    {!cookies.get("sessionID") && (
                        <div>
                            <NavLink to={'/registration'} >
                                Reg
                            </NavLink>
                            -
                            <NavLink to={'/login'} >
                                Login
                            </NavLink>
                        </div>
                    )}
                    {cookies.get("sessionID") && (
                        <div>
                            <NavLink to={'/sellticket'} >
                                Sell Ticket
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header