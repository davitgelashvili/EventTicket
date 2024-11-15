import { useState } from "react"
import { getData, postData} from "../../../../http/getApi";
import UiInput from "../../../Ui/UiInput/UiInput"
import Style from './LoginForm.module.css'
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { userAction } from "../../../../store/userData";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const cookies = new Cookies();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const data = {
        email: email,
        password: password
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(
            email === '' || 
            password === ''
        ) {
            setIsError(true)
        } else {
            postData(`/users/auth`, 'post', data)
            .then( res => {
                const thisData = res?.data?.[0]
                return(
                    thisData?.email === data?.email && thisData?.password === data?.password ? (
                        // cookies.set("sessionID", thisData.id),
                        dispatch(userAction.changeLogedIn(true)),
                        dispatch(userAction.changeStatus(thisData.status)),
                        dispatch(userAction.changeBalance(thisData.balance)),
                        navigate(-1)
                    ) : (
                        setIsError(true)
                    )
                )
            })
        }
    }

    return (
        <form className={Style['form']} onSubmit={handleSubmit} onChange={() => setIsError(false)}>

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
                placeholder='*******'
                onChangeInput={(e) => setPassword(e.target.value)}
            />
            {isError && <p>მონაცემები არასწორია</p>}
            <UiInput 
                type='submit'
                value={'შესვლა'}
                className="dark"
            />
        </form>
    )
}

export default LoginForm