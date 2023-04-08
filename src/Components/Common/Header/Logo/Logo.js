import { NavLink } from 'react-router-dom'
import Style from './../Header.module.css'

function Logo() {
    return (
        <h1 className={`${Style['header__logo']}`}>
            <NavLink to={'/'}>
                TICKETTRADE
            </NavLink>
        </h1>
    )
}

export default Logo