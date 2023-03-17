import { useContext, useEffect, useState } from "react"
import { EventContext } from "../Events/EventsContext"
import Cookies from "universal-cookie"
import Style from './SellTicket.module.css'
import { postApi } from "../../http/getApi"
import UiInput from "../Ui/UiInput/UiInput"


function SellTicket() {
    const {data} = useContext(EventContext)
    const [eventId, setEventId] = useState('')
    const [userId, setUserId] = useState('')
    const [ticketPrice, setTicketPrice] = useState('')
    const [ticketAddress, setTicketAddress] = useState('')
    const [ticketDesc, setTicketDesc] = useState('')
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const cookie = new Cookies()

    const newTicket = {
        eventId: eventId,
        userId: userId,
        ticketAddress: ticketAddress,
        ticketDesc: ticketDesc,
        ticketPrice: ticketPrice,
    }

    useEffect(()=> {
        setUserId(cookie.get('sessionID'))
        
    }, [])


    const handleSubmit = (e)=> {
        e.preventDefault();
        if(
            eventId === '' || 
            ticketPrice === '' || 
            ticketAddress === '' || 
            ticketDesc === ''
        ) {
            setIsError(true)
        } else {
            postApi('tickets', newTicket)
            setIsSuccess(true)
        }
    }

    return (
        <form className={Style['form']} onSubmit={handleSubmit} onChange={() => setIsError(false)}>
            <select onChange={(e) => setEventId(e.target.value)}>
                <option value={''}>აირჩიე ღონისძიება</option>
                {data.map( item => {
                    return (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    )
                })}
            </select>
            <UiInput 
                title='ადგილი'
                type='text'
                value={ticketAddress}
                placeholder='E.G JSNOW'
                onChangeInput={(e) => setTicketAddress(e.target.value)}
            />
            <UiInput 
                title='ფასი'
                type='text'
                value={ticketPrice}
                placeholder='E.G JSNOW'
                onChangeInput={(e) => setTicketPrice(e.target.value)}
            />
            <UiInput 
                title='მოკლე აღწერა'
                type='text'
                value={ticketDesc}
                placeholder='E.G JSNOW'
                onChangeInput={(e) => setTicketDesc(e.target.value)}
            />
            {isError && <p>value is undefaind</p>}
            {isSuccess && <p>Loged</p>}
            <button>Login</button>
        </form>
    )
}

export default SellTicket