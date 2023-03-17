import { useContext } from "react"
import { Route, Routes,  } from "react-router-dom"
import MainPage from "../../Pages/Main/MainPage"
import EventDetail from "./EventDetail/EventDetail"
import EventList from "./EventList/EventList"
import { EventContextProvider } from "./EventsContext"
import SellTicketPage from "../../Pages/SellTicket/SellTicket"

function Events() {
    return (
        <EventContextProvider>
            <Routes>
                <Route path="/" element={<MainPage />} /> 
                <Route path="/concerts" element={<EventList link={'concerts'} />} /> 
                <Route path="/sport" element={<EventList link={'sport'} />} /> 
                <Route path="/theatre" element={<EventList link={'theatre'} />} /> 
                <Route path="/opera" element={<EventList link={'opera'} />} /> 
                <Route path="/:link_name" element={<EventDetail />} /> 
                <Route path="/sellticket" element={<SellTicketPage />} />
            </Routes>
        </EventContextProvider>
    )
}

export default Events