import { NavLink } from 'react-router-dom'
import Style from './EventCard.module.css'

function EventCard({props}){
    return (
        <NavLink to={`/${props.link_name}`} className={`${Style['card']}`}>
            <figure className={`${Style['card__cover']}`}>
                <img src={`${props.image}`} alt="cover" className={`${Style['card__cover--img']}`} />
            </figure>
            <h1 className={`${Style['card__title']}`}>{props.name}</h1>
            <p className={`${Style['card__local']}`}>{props.location}</p>
            <p className={`${Style['card__date']}`}>{props.date_time}</p>
        </NavLink>
    )
}

export default EventCard