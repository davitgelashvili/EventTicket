import { NavLink } from 'react-router-dom'
import Style from './Sidebar.module.css'

function Sidebar() {
    const menu = [
        {
            id: 98473,
            name: "კონცერტები",
            link: "concerts"
        },
        {
            id: 44893,
            name: "სპორტი",
            link: "sport"
        },
        {
            id: 39393,
            name: "ოპერა",
            link: "opera"
        },
        {
            id: 205833,
            name: "თეატრი",
            link: "theatre"
        }
    ]
    return (
        <div className={`${Style['sidebar']}`}>
            <ul>
                    {menu.map( item => {
                        return (
                            <li key={item.id}>
                                <NavLink to={item.link}>
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