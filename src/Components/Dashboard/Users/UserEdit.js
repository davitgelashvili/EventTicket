import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getData, sendData } from "../../../http/getApi"

const UserEdit = () => {
    const {id} = useParams()
    const [status, setStatus] = useState(null)
    const [item, setItem] = useState([])

    useEffect(()=> {
        getData(`/users/${id}`).then( res => {
            const respons = res.data 
            setStatus(respons.status)
            setItem(respons)
        })
    }, [])
    
    return (
        <>
        <div>
            <h3>{item.fullName}</h3>
            <div>
                <span>status:</span>
                <span>
                    {status}
                </span> 
                <span>
                    <select onChange={(e) => setStatus(e.target.value)}> 
                        <option value={'0'}>select</option>
                        <option value={'false'}>false</option>
                        <option value={'true'}>true</option>
                    </select>
                </span>
                </div>
            <h5>username: {item.userName}</h5>
            <h5>balance: {item.balance}</h5>
            <h5>password: {item.password}</h5>
            <button onClick={() => {
                sendData(`/users/${id}`, 'put', {
                    status: status
                })
            }}>
                შენახვა
            </button>
        </div>
        </>
    )
}

export default UserEdit