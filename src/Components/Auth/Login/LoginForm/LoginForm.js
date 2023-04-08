import { useState } from "react"
import { getApi} from "../../../../http/getApi";
import UiInput from "../../../Ui/UiInput/UiInput"
import Style from './LoginForm.module.css'
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { userAction } from "../../../../store/userData";

function LoginForm() {
    const cookies = new Cookies();
    const [userName, setUserName] = useState('');
    const [passsword, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch()

    const data = {
        userName: userName,
        passsword: passsword
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(
            userName === '' || 
            passsword === ''
        ) {
            setIsError(true)
        } else {
            getApi('users').then( res => {
                const thisData = res?.data
                thisData?.map(item => {return(
                    item.userName === data.userName && item.passsword === data.passsword &&(
                        cookies.set("sessionID", item.id),
                        console.log(thisData),
                        dispatch(userAction.changeLogedIn(true))
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
                value={passsword}
                placeholder='Password'
                onChangeInput={(e) => setPassword(e.target.value)}
            />
            {isError && <p>value is undefaind</p>}
            {<p>Loged</p>}
            <UiInput 
                type='submit'
                value={'შესვლა'}
                className="dark"
            />
        </form>
    )
}

export default LoginForm