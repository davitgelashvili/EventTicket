import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userAction } from '../../../../store/userData'
import Style from './Profile.module.css'

const ProfileMenu = () => {
    const dispatch = useDispatch()

    return (
        <ul className={`${Style['menu']}`}>
            <li className={`${Style['menu__item']}`}>
                <NavLink
                    className={({isActive}) => `${Style['menu__item--link']} ${isActive && Style['active']}`} 
                    to={'/dashboard'}
                >
                    ადმინ პანელი
                </NavLink>
            </li>
            <li className={`${Style['menu__item']}`}>
                <NavLink
                    className={({isActive}) => `${Style['menu__item--link']} ${isActive && Style['active']}`} 
                    to={'/ticket'}
                >
                    ჩემი ბილეთები
                </NavLink>
            </li>
            <li className={`${Style['menu__item']}`}>
                <NavLink
                    className={`${Style['menu__item--link']}`} 
                    to={'/'} 
                    onClick={() => {
                        dispatch(userAction.changeLogedIn(false))
                        document.cookie = `sessionID=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
                    }}
                >
                    Log Out
                </NavLink>
            </li>
        </ul>
    )
}
export default ProfileMenu