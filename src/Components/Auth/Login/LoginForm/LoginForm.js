import { useState } from "react"
import { getData} from "../../../../http/getApi";
import UiInput from "../../../Ui/UiInput/UiInput"
import Style from './LoginForm.module.css'
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { userAction } from "../../../../store/userData";

function LoginForm() {
    const cookies = new Cookies();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch()

    const data = {
        userName: userName,
        password: password
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(
            userName === '' || 
            password === ''
        ) {
            setIsError(true)
        } else {
            getData('users').then( res => {
                const thisData = res?.data
                thisData?.map(item => {
                    return(
                    item.userName === data.userName && item.password === data.password &&(
                        cookies.set("sessionID", item.id),
                        dispatch(userAction.changeLogedIn(true)),
                        dispatch(userAction.changeVerified(item.isVerify)),
                        dispatch(userAction.changeBalance(item.balance))
                    )
                )})
            })
        }
    }

    return (
        <form className={Style['form']} onSubmit={handleSubmit} onChange={() => setIsError(false)}>

            <UiInput 
                title='Username'
                type='text'
                value={userName}
                placeholder='E.G JSNOW'
                onChangeInput={(e) => setUserName(e.target.value)}
            />
            <UiInput 
                title='Password'
                type='password'
                value={password}
                placeholder='Password'
                onChangeInput={(e) => setPassword(e.target.value)}
            />
            {isError && <p>value is undefaind</p>}
            <UiInput 
                type='submit'
                value={'შესვლა'}
                className="dark"
            />
        </form>
    )
}

export default LoginForm