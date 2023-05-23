import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {getData} from './../../../../http/getApi'
import Style from './../Users.module.css'

const UsersList = () => {
    const [data, setData] = useState([])

    useEffect(()=> {
        getData('/users').then( res => {
            const data = res.data 
            setData(data)
        })
    }, [])

    const statusTrue = data?.filter( item => item.status === 'true')
    const statusFalse = data?.filter( item => item.status === "false")

    return (
        <div className={`${Style['users']}`}>
            <div className={`${Style['users-list']}`}>
                {
                    statusTrue?.map(item => {
                        return (
                            <NavLink key={item.id} to={`${item.id}`} className={`${Style['users-list-item']}`}>
                                <h3>{item.fullName}</h3>
                                <h3>status: {item.status}</h3>
                                <h5>username: {item.userName}</h5>
                                <h5>balance: {item.balance}</h5>
                                <h5>password: {item.password}</h5>
                                
                            </NavLink>
                        )
                    })
                }
            </div>
            <div className={`${Style['users-list']}`}>
                {
                    statusFalse?.map(item => {
                        return (
                            <NavLink key={item.id} to={`${item.id}`} className={`${Style['users-list-item']}`}>
                                <h3>{item.fullName}</h3>
                                <h3>status: {item.status}</h3>
                                <h5>username: {item.userName}</h5>
                                <h5>balance: {item.balance}</h5>
                                <h5>password: {item.password}</h5>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UsersList