import { useContext, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { EventContext } from '../EventsContext'
import EventTickets from '../EventTickets/EventTickets'
import Style from './EventDetail.module.css'
import UiInput from './../../Ui/UiInput/UiInput'
import { useNavigate } from 'react-router-dom'


function EventDetail(){
    const [showTickets, setShowTickets] = useState(false)
    const {data} = useContext(EventContext)
    const {link_name} = useParams()
    const navigate = useNavigate()

    const filtered = data.filter( item => item.link_name === link_name)

    return (
        <>
            {filtered.map( item => {
                return (
                    <div className={`${Style['detail']}`} key={item.id}>
                        <figure className={`${Style['detail__cover']}`}>
                            <img src={item.image} alt="cover" className={`${Style['detail__cover--img']}`} />
                        </figure>
                        <div className={`${Style['detail__body']}`}>
                            <div className={`${Style['detail__body--left']}`}>
                                <h1 className={`${Style['detail__body--title']}`}>
                                    {item.name}
                                </h1>
                                {!showTickets && ( 
                                <div className={`${Style['detail__body--text']}`}>
                                    {item.body}
                                </div>
                                )}
                            </div>
                            {!showTickets && (
                            <div className={`${Style['detail__body--right']}`}>
                                <p>
                                    {item.date_month}, 
                                    {item.date_time}, 
                                </p>
                                <p>
                                    {item.location}
                                </p>
                                <p>
                                    {item.price} GEL
                                </p>
                                <UiInput 
                                    type='submit'
                                    value={'See available tickets'}
                                    onClickInput={() => setShowTickets(true)}
                                />
                                <UiInput 
                                    type='submit'
                                    value={'Sell a ticket'}
                                    onClickInput={() => navigate('/sellticket')}
                                />
                            </div>
                            )}
                            {showTickets && <EventTickets event={filtered[0]} />}
                        </div>
                        
                    </div>
                )
            })}
        </>
    )
}

export default EventDetail