import { useContext, useEffect } from 'react'
import { EventContext } from '../EventsContext'
import Style from './EventTickets.module.css'
import profileImg from './../../../assets/images/profile.png'


function EventTickets({event}){
    const {allTicket, usersData} = useContext(EventContext)
    const filtered = allTicket.filter( item => event.id === +item.eventId)
   
    return (
        <div className={`${Style['ticket']}`}>
           {
            filtered.map(item => {
                const users = usersData.filter( user => user.id === +item.userId)
                const userFullName = users.map( user => user.fullName)

                return (
                    <div key={item.id} className={`${Style['ticket__item']}`}>
                        <figure className={`${Style['ticket__item--avatar']}`}>
                            <img src={profileImg} alt='profile' className={`${Style['ticket__item--img']}`} />
                        </figure>
                        <div className={`${Style['ticket__item--body']}`}>
                            <h1 className={`${Style['ticket__item--name']}`}>{userFullName}</h1>
                            <p className={`${Style['ticket__item--address']}`}>
                                {item.ticketAddress}
                            </p>
                            <p className={`${Style['ticket__item--desc']}`}>
                                {item.ticketDesc}
                            </p>
                        </div>
                        <div className={`${Style['ticket__item--price']}`}>
                            <p className={`${Style['ticket__item--price-number']}`}>
                                $ {item.ticketPrice}
                            </p>
                            <p className={`${Style['ticket__item--price-text']}`}>/ticket</p>
                        </div>
                    </div>
                )
            })
           }
        </div>
    )
}

export default EventTickets