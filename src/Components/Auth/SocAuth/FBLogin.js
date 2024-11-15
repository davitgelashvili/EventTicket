import { useDispatch } from "react-redux";
import { getData, postData } from "../../../http/getApi";
import Cookies from "universal-cookie";
import OAuth2Login from "react-simple-oauth2-login";
import { userAction } from "../../../store/userData";
import styles from './SocAuth.module.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function FBLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch()
    const cookies = new Cookies();
    const navigate = useNavigate()

    const obje = {
        email: email,
        password: password
    }

    const onSuccess = async(res) => {
        try {
            const accessToken = res.access_token
            const result = await fetch(`https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${accessToken}`)
            const data = await result.json()

            postData(`/users/auth`, 'post', obje)
            .then( res => {
                if(res.data.length > 0) {
                    console.log(thisData)
                    const thisData = res?.data?.[0]
                    return(
                        thisData?.email === obje?.email && thisData?.password === obje?.password ? (
                            // cookies.set("sessionID", thisData.id),
                            dispatch(userAction.changeLogedIn(true)),
                            navigate(-1)
                        ) : (
                            setIsError(true)
                        )
                    )
                }else {
                    console.log(1)
                    postData('/users/create', 'post', {
                        fullname: data.name,
                        email: data.email,
                        password: String(data.id),
                        balance: 0,
                        status: 'user',
                        contact: 'fb'
                    })
                    dispatch(userAction.changeLogedIn(true))
                    navigate(-1)
                }
            })

            // postData(`/users/auth`, 'post', {
            //     email: data?.email,
            //     password: String(data?.id),
            // })
            // .then( res => {
            //     const thisData = res?.data?.[0]
            //     console.log(11111,thisData)
                // dispatch(userAction.changeLogedIn(true))
                // navigate(-1)
                // return(
                //     thisData?.email === data?.email && thisData?.password === data?.password ? (
                //         // cookies.set("sessionID", thisData.id),
                //         dispatch(userAction.changeLogedIn(true)),
                //         dispatch(userAction.changeStatus(thisData.status)),
                //         dispatch(userAction.changeBalance(thisData.balance)),
                //         navigate(-1)
                //     ) : (
                //         setIsError(true)
                //     )
                // )
            // })
            // if(result && data) {
            //     // cookies.set("sessionID", data.id)
            //     postData(`/users/auth`).then(res => {
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

export default FBLogin