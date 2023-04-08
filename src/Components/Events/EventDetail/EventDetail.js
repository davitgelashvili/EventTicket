import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { EventContext } from '../EventsContext'
import Style from './EventDetail.module.css'
import EventFooter from './EventFooter'
import EventCover from './EventCover'
import EventDesc from './EventDesc'
import EventPrice from './EventPrice'


function EventDetail(){
    const {eventsData} = useContext(EventContext)
    const {link_name} = useParams()
    const filtered = eventsData?.filter( item => item.link_name === link_name)
  
    return (
        <div className={`${Style['detail']}`}>
            <div className={`${Style['detail__content']}`}>
                <EventCover item={filtered[0]}/>
                <div className={`${Style['detail__body']}`}>
                    <EventDesc item={filtered[0]}/>
                    <EventPrice item={filtered[0]}/>
                    <EventFooter item={filtered[0]}/>
                </div>
            </div>
        </div>
    )
}

export default EventDetail