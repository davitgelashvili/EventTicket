import { createContext, useEffect, useState } from "react"
import {getData} from "../../http/getApi";
import { useDispatch, useSelector } from "react-redux";
import { eventDataAction, fetchEventData } from "../../store/eventData";

const EventContext = createContext();

function EventContextProvider({children}) {
    const dispatch = useDispatch()
    const [ticketsData, setTicketsData] = useState([]);
    const [usersData, setUsersData] = useState([]);
    const {data, loading, error} = useSelector(state => state.eventData)

    // useEffect(() => {
    //     if(data === null){
    //         getData('/events/list').then(res => {
    //             const data = res?.data
    //             dispatch(eventDataAction.changeEventData(data))
    //         })
    //     }
    // }, [dispatch])

    useEffect(() => {
        if(data === null) {
            console.log(data)
            // Dispatch the action to fetch data when the component mounts
            dispatch(fetchEventData(`${process.env.REACT_APP_API_URL}/events/list`))
        }
      }, [dispatch]);

      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;


    return (
        <EventContext.Provider value={{eventsData: data, ticketsData: ticketsData, usersData: usersData}} >
            {children}
        </EventContext.Provider>
    )
}

export {EventContext, EventContextProvider}