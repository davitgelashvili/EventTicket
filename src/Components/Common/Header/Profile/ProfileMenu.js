import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../../../../store/userData'
import Style from './Profile.module.css'
import { useEffect, useState } from 'react'

const ProfileMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector( state => state.userData)

    useEffect(()=>{
        console.log('aaaa', user)
    },[user])

    return (
        <ul className={`${Style['menu']}`}>
             <div>
                <h3>Verify:</h3>
                <h4>{user.status === false ? 'false' : user.status}</h4>
            </div>
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