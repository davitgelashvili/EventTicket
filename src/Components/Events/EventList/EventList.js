import { useContext } from 'react'
import EventCard from '../EventCard/EventCard'
import { EventContext } from '../EventsContext'
import Style from './EventList.module.css'


function EventList({link}){
    const {data} = useContext(EventContext)

    const filtered = data.filter( item => item.category === link)

    return (
        <div className={`${Style['event']}`}>
            {filtered.map( item => {
                return (
                    <div className='col-3' key={item.id}>
                        <EventCard 
                            props={item}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default EventList