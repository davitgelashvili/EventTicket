import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { postData } from "../../../../http/getApi";
import UiInput from "../../../Ui/UiInput/UiInput"
import Style from './RegForm.module.css'

function RegForm() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate()

    const data = {
        fullname: fullname,
        email: email,
        password: password,
        balance: 0,
        status: 'user'
    }

    const RedirectNav = () => {
        return navigate("/login")
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(
            fullname === '' ||
            email === '' || 
            password === ''
        ) {
            setIsError(true)
        } else {
            postData('/users/create', 'post', {
                ...data
            })
            setIsSuccess(true)
            RedirectNav()
        }
    }



    return (
        <form className={Style['form']} onSubmit={handleSubmit} onChange={() => setIsError(false)}>
            <UiInput 
                title='სახელი გვარი'
                type='text'
                value={fullname}
                placeholder='შეიყვანეთ ტექსტი'
                onChangeInput={(e) => setFullname(e.target.value)}
            />
            <UiInput 
                title='ელ-ფოსტა'
                type='text'
                value={email}
                placeholder='შეიყვანეთ ტექსტი'
                onChangeInput={(e) => setEmail(e.target.value)}
            />
            <UiInput 
                title='პაროლი'
                type='password'
                value={password}
                placeholder='********'
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