import { useEffect, useState } from 'react'
import {getData, getEvent, postData} from './../../../../http/getApi'
import Style from './../Events.module.css'

const EventList = () => {
    const [data, setData] = useState([])
    let month = new Date().getMonth() +1
    let date = new Date().getDate()
    let year = new Date().getFullYear()

    if(month < 10){
        month = 0+''+month
    }

    if(date < 10){
        date = 0+''+date
    }


    useEffect(()=> {
        getData('/events/list').then( res => {
            const data = res.data 
            setData(data)
        })
    }, [])

    return (
        <>
            {
                data?.map(item => {
                    console.log(item)
                    return (
                        <div key={item.id} className={`${Style['events-item']}`}>
                            <h3>{item.name}</h3>
                            <h5>price: {item.price}</h5>
                            <button onClick={() => {
                                postData(`events/${item.id}`, 'delete')
                            }}>წაშლა</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default EventList