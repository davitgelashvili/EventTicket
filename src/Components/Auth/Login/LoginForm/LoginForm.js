import { useEffect, useState } from "react"
import { getApi, postApi } from "../../../../http/getApi";
import UiInput from "../../../Ui/UiInput/UiInput"
import Style from './LoginForm.module.css'
import Cookies from "universal-cookie";

function LoginForm() {
    const [userName, setUserName] = useState('');
    const [passsword, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const cookies = new Cookies();

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
                res.data.map(item => {
                    if(
                        item.userName === data.userName &&
                        item.passsword === data.passsword
                    ){
                        cookies.set("sessionID", item.id, {
                            path: "/",
                            sameSite: "none",
                            secure: true,
                          });
                    }
                })
            })
            setIsSuccess(true)
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
            {isSuccess && <p>Loged</p>}
            <button>Login</button>
        </form>
    )
}

export default LoginForm