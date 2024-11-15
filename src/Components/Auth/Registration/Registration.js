import Auth from "../Auth"
import RegForm from "./RegForm/RegForm"
import styles from './../Auth.module.css'
import FBRegistration from "../SocAuth/FBRegistration"

function Registration() {
    return (
        <Auth>
            <h1 className={styles.title}>რეგისტრაცია</h1>
            <FBRegistration />
            <RegForm />
        </Auth>
    )
}

export default Registration