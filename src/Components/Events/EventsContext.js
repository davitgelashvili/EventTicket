import { createContext, useEffect, useState } from "react"
import {getData, getTicket, sendData} from "../../http/getApi";

const EventContext = createContext();

function EventContextProvider({children}) {
    const [eventsData, setEvenstData] = useState([])
    const [ticketsData, setTicketsData] = useState([]);
    const [usersData, setUsersData] = useState([]);

    function price(data) {
        data.map(item => {
            return( 
                item.ticket_basket_1 > 0 ? (
                    sendData(`events/${item.id}`, 'put', {
                        ...item,
                        price: item.price_basket_1
                    }) 
                ) : item.ticket_basket_2 > 0 ? (
                    sendData(`events/${item.id}`, 'put', {
                        ...item,
                        price: item.price_basket_2
                    }) 
                ) : (
                    sendData(`events/${item.id}`, 'put', {
                        ...item,
                        price: item.price_basket_3
                    }) 
                )
            )
        })
    }

    useEffect(() => {
        getData('events').then(res => {
            const data = res?.data
            price(data && data)
            setEvenstData(data && data)
        })
        getTicket('tickets').then(res => {
            const data = res?.data
            setTicketsData(data && data)
        })
    }, [])

    return (
        <EventContext.Provider value={{eventsData: eventsData, ticketsData: ticketsData, usersData: usersData}} >
            {children}
        </EventContext.Provider>
    )
}

export {EventContext, EventContextProvider}