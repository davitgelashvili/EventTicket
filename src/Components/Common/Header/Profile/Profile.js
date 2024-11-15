import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProfileMenu from './ProfileMenu'
import { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import styles from './Profile.module.css'

const Profile = () => {
    const location = useLocation()
    const [isMenu, setIsMenu] = useState(false)
    const user = useSelector( state => state.userData)

    useEffect(()=>{
        setIsMenu(false)
    }, [location])

    console.log(user)

    return (
        <div style={{position: 'relative'}}>
            <button 
                className={styles.btn} 
                onClick={() => setIsMenu(!isMenu)}
                >
                <FaUserCircle />
                <p className={styles.btntext} >Profile</p>
            </button>
            {isMenu && <ProfileMenu />}
        </div>
    )
}
export default Profile