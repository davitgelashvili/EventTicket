import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { EventContext } from '../EventsContext'
import Style from './EventDetail.module.css'
import EventBody from './EventBody'
import EventFooter from './EventFooter'


function EventDetail(){
    const {eventsData} = useContext(EventContext)
    const {link_name} = useParams()
    const filtered = eventsData.filter( item => item.link_name === link_name)
  
    return (
        <div className={`${Style['detail']}`}>
            <EventBody item={filtered[0]}/>
            <EventFooter item={filtered[0]}/>
        </div>
    )
}

export default EventDetail