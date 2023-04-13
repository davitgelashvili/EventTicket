import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { sendData } from "../../../../http/getApi";
import UiInput from "../../../Ui/UiInput/UiInput"
import Style from './RegForm.module.css'

function RegForm() {
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate()

    const data = {
        fullName: fullName,
        userName: userName,
        password: password,
        balance: 0,
        status: "false"
    }

    const RedirectNav = () => {
        return navigate("/login")
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(
            fullName === '' ||
            userName === '' || 
            password === ''
        ) {
            setIsError(true)
        } else {
            sendData('users', 'post', data)
            setIsSuccess(true)
            RedirectNav()
        }
    }



    return (
        <form className={Style['form']} onSubmit={handleSubmit} onChange={() => setIsError(false)}>
            <UiInput 
                title='Fullname'
                type='text'
                value={fullName}
                placeholder='E.G Jon Snow'
                onChangeInput={(e) => setFullName(e.target.value)}
            />
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
            {isSuccess && <p>send</p>}
            <UiInput 
                type='submit'
                value={'რეგისტრაცია'}
                className="dark"
            />
        </form>
    )
}

export default RegForm