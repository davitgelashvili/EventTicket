import { useLocation, useNavigate } from 'react-router-dom'
import UiInput from '../../../Ui/UiInput/UiInput'
import { useSelector } from 'react-redux'
import ProfileMenu from './ProfileMenu'
import { useEffect, useState } from 'react'

const Profile = () => {
    const location = useLocation()
    const [isMenu, setIsMenu] = useState(false)
    const navigate = useNavigate()
    const user = useSelector( state => state.userData)

    useEffect(()=>{
        setIsMenu(false)
    }, [location])

    return (
        <>
        {!user.logedIn && (
            <>
                <UiInput 
                    type='submit'
                    value={'Log In'}
                    onClickInput={() => navigate('/login')}
                    className={'dark'}
                />
                <UiInput 
                    type='submit'
                    value={'Sign Up'}
                    onClickInput={() => navigate('/registration')}
                    className={'light'}
                />
            </>
        )}
        {user.logedIn && (
        <>
            <div>
                <h3>Verify:</h3>
                <h4>{user.verified ? 'true' : 'false'}</h4>
            </div>
            <div>
                <h3>Balance:</h3>
                <h4>{user.balance}</h4>
            </div>
            <button onClick={() => setIsMenu(!isMenu)}>
                Profile
            </button>
            {isMenu && <ProfileMenu />}
        </>
        )}
        </>
    )
}
export default Profile