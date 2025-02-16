import { NavLink } from 'react-router-dom'
import Style from './EventCard.module.css'
import CardCover from './CardCover'
import CardBody from './CardBody'

function EventCard({props}){

    // console.log(props)
    return (
        <>
        {
            props.image ? (
                <NavLink to={`/${props.linkName}`} className={`${Style['card']}`}>
                    <CardCover image={props.image}/>
                    <CardBody props={props}/>
                </NavLink>
            ) : (
                <div className={`${Style['loader']}`}>
                    
                </div>
            )
        }
        </>
    )
}

export default EventCard