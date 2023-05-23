import 'swiper/css';
import { useContext, useEffect, useState } from 'react'
import { EventContext } from '../Events/EventsContext'
import EventList from './EventList';

function Main() {
    const {eventsData} = useContext(EventContext)
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

    let nowTime = new Date(month+'/'+date+'/'+year).getTime()

    useEffect(()=>{
        setData(eventsData)
    },[eventsData])
    console.log(data)
    
    // const newFiltered = data.filter(item => {
    //     const eventDate = new Date(item.active_date).getTime()
    //     return (eventDate > nowTime && item)
    // })

    // const oldFiltered = data.filter(item => {
    //     const eventDate = new Date(item.active_date).getTime()
    //     return (eventDate < nowTime && item)
    // })
    
    return (
        <>
        <h1>აქტიური ღონისძიებები</h1>
        <EventList filtered={eventsData} title={'new'}/>
        <h1>ჩატარებული ღონისძიებები</h1>
        <EventList filtered={eventsData} title={'old'}/>
        </>
    )
}

export default Main