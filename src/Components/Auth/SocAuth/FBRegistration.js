import { useDispatch } from "react-redux";
import { getData, postData } from "../../../http/getApi";
import Cookies from "universal-cookie";
import OAuth2Login from "react-simple-oauth2-login";
import { userAction } from "../../../store/userData";
import styles from './SocAuth.module.css'

function FBRegistration() {
    const dispatch = useDispatch()
    const cookies = new Cookies();

    const onSuccess = async(res) => {
        try {
            const accessToken = res.access_token
            const result = await fetch(`https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${accessToken}`)
            const data = await result.json()
            console.log('here', data, data.name)
            postData('/users/create', 'post', {
                fullname: data.name,
                email: data.email,
                password: String(data.id),
                balance: 0,
                status: 'user'
            })
            // if(result) {
            //     // cookies.set("sessionID", data.id)
            //     getData(`/login/id=${data.id}`).then(res => {
            //         const thisData = res?.data
            //         console.log(res)
                    
            //         dispatch(userAction.changeLogedIn(true))
            //         // dispatch(userAction.changeBalance('111'))
            //         dispatch(userAction.changeStatus(data.status))
            //         dispatch(userAction.changeUserId(data.id))
            //     })
            // }
        } catch (error) {
            console.log(error)
        }

        // return 1
    }

    function onFailure(e){
        console.log(e)
        return 1
    }

    return (
        <div className={styles.fblogin}>
            <OAuth2Login
                buttonText="Facebook-ით ავტორიზაცია"
                className={styles.btn}
                authorizationUrl="https://www.facebook.com/dialog/oauth"
                responseType="token"
                clientId="921442426404245"
                redirectUri="http://localhost:3000/"
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}

export default FBRegistration