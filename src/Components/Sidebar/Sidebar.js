import { NavLink } from 'react-router-dom'
import Style from './Sidebar.module.css'

function Sidebar({data}) {
    return (
        <div className={`${Style['sidebar']}`}>
            <ul className={`${Style['sidebar__menu']}`}>
                {data.map( item => {
                    return (
                        <li key={item.id} className={`${Style['sidebar__menu--item']}`}>
                            <NavLink to={item.link} className={`${Style['sidebar__menu--link']}`}>
                                {item.name}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar