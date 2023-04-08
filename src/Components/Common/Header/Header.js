import Style from './Header.module.css'
import Logo from './Logo/Logo'
import Search from './Search/Search'
import Profile from './Profile/Profile'

function Header() {

    return (
        <header className={`${Style['header']}`}>
            <div className="container">
                <div className={`${Style['header__content']}`}>
                    <Logo />

                    <Search />
                    
                    <div className={`${Style['header__auth']}`}>
                        <Profile />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header