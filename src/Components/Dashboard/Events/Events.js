import { NavLink } from 'react-router-dom'
import EventList from './../Events/EventList/EventList'
import Style from './Events.module.css'

const EventsPage = () => {
    return (
        <>
        <NavLink to={'add'} className={`${Style['events-add-link']}`}>
            ღონისძიების დამატებ
        </NavLink>
        <EventList />
        </>
    )
}

export default EventsPage