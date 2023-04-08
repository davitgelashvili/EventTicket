import { Route, Routes,  } from "react-router-dom"
import MainPage from "../../Pages/Main/MainPage"
import EventDetail from "./EventDetail/EventDetail"
import { EventContextProvider } from "./EventsContext"
import MyTicketsPage from "../../Pages/MyTickets/MyTickets"

function Events() {
    return (
        <EventContextProvider>
            <Routes>
                <Route path="/" element={<MainPage />} /> 
                <Route path="/ticket" element={<MyTicketsPage />} />
                <Route path="/:link_name" element={<EventDetail />} /> 
            </Routes>
        </EventContextProvider>
    )
}

export default Events