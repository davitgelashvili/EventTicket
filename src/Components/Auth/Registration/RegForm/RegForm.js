import { useEffect, useState } from "react"
import { postApi } from "../../../../http/getApi";
import UiInput from "../../../Ui/UiInput/UiInput"
import Style from './RegForm.module.css'

function RegForm() {
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [passsword, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const data = {
        fullName: fullName,
        userName: userName,
        passsword: passsword
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(
            fullName === '' ||
            userName === '' || 
            passsword === ''
        ) {
            setIsError(true)
        } else {
            postApi('users', data)
            setIsSuccess(true)
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
                type='text'
                value={passsword}
                placeholder='Password'
                onChangeInput={(e) => setPassword(e.target.value)}
            />
            {isError && <p>value is undefaind</p>}
            {isSuccess && <p>send</p>}
            <button>reg</button>
        </form>
    )
}

export default RegForm