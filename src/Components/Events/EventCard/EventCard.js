import { NavLink } from 'react-router-dom'
import Style from './EventCard.module.css'

function EventCard({props}){
    return (
        <NavLink to={`/${props.link_name}`} className={`${Style['card']}`}>
            <figure className={`${Style['card__cover']}`}>
                <img src={`${props.image}`} alt="cover" className={`${Style['card__cover--img']}`} />
            </figure>
            <div className={`${Style['card__text']}`}>
                <h3 className={`${Style['card__price']}`}>{props.price} ლარი</h3>
                <h1 className={`${Style['card__title']}`}>{props.name}</h1>
                <p className={`${Style['card__footer']}`}>
                    <span className={`${Style['card__local']}`}>{props.location}</span>
                    <span className={`${Style['card__date']}`}>{props.date_month} {props.date_time}</span>
                </p>
            </div>
        </NavLink>
    )
}

export default EventCard