import { createContext, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import {getApi, putApi} from "../../http/getApi";

const EventContext = createContext();

function EventContextProvider({children}) {
    const user = useSelector(state => state.userData)
    const [eventsData, setEvenstData] = useState([])
    const [ticketsData, setTicketsData] = useState([]);
    const [usersData, setUsersData] = useState([]);

    function price(data) {
        data.map(item => {
            if(item.ticketBasket.basket_1 > 0) {
                putApi(`events/${item.id}`, {
                    ...item,
                    price: item.priceBasket.basket_1
                }) 
            }else if(item.ticketBasket.basket_2 > 0) {
                putApi(`events/${item.id}`, {
                    ...item,
                    price: item.priceBasket.basket_2
                }) 
            }else {
                putApi(`events/${item.id}`, {
                    ...item,
                    price: item.priceBasket.basket_3
                }) 
            }
        })
    }

    useEffect(() => {
        getApi('events').then(res => {
            const data = res?.data
            price(data && data)
            setEvenstData(data && data)
        })
        getApi('tickets').then(res => setTicketsData(res?.data))
        getApi('users').then(res => setUsersData(res?.data))
    }, [user])

    return (
        <EventContext.Provider value={{eventsData: eventsData, ticketsData: ticketsData, usersData: usersData}} >
            {children}
        </EventContext.Provider>
    )
}

export {EventContext, EventContextProvider}