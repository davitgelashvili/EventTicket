import { createContext, useEffect, useState } from "react"
import {getApi} from "../../http/getApi";

const EventContext = createContext();

function EventContextProvider({children}) {
    const [eventData, setEventData] = useState([])
    const [eventTickets, setEventTickets] = useState([]);
    const [users, setUser] = useState([]);

    useEffect(() => {
        getApi('events').then(res => setEventData(res.data))
        getApi('tickets').then(res => setEventTickets(res.data))
        getApi('users').then(res => setUser(res.data))
    }, [])

    return (
        <EventContext.Provider value={{data: eventData, allTicket: eventTickets, usersData: users}} >
            {children}
        </EventContext.Provider>
    )
}

export {EventContext, EventContextProvider}