import { createContext, useEffect, useState } from "react"
import {getData} from "../../http/getApi";

const EventContext = createContext();

function EventContextProvider({children}) {
    const [eventsData, setEvenstData] = useState([])
    const [ticketsData, setTicketsData] = useState([]);
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        getData('/events/list').then(res => {
            const data = res?.data
            setEvenstData(data && data)
        })
    }, [])

    return (
        <EventContext.Provider value={{eventsData: eventsData, ticketsData: ticketsData, usersData: usersData}} >
            {children}
        </EventContext.Provider>
    )
}

export {EventContext, EventContextProvider}