import { Route, Routes } from "react-router-dom"
import AddEvent from "./Events/AddEvent"
import EventsPage from "./Events/Events"
import UserEdit from "./Users/UserEdit"
import UsersPage from "./Users/Users"

const DashboardRouter = () => {
    return (
        <>
        <Routes>
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/add" element={<AddEvent />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserEdit />} />
        </Routes>
        </>
    )
}

export default DashboardRouter