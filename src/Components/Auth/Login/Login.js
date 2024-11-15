import Auth from "../Auth"
import FBLogin from "../SocAuth/FBLogin"
import styles from './../Auth.module.css'
import LoginForm from "./LoginForm/LoginForm"

function Login() {
    return (
        <Auth>
            <h1 className={styles.title}>ავტორიზაცია</h1>
            <FBLogin />
            <LoginForm />
        </Auth>
    )
}

export default Login