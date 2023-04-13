import Events from "../../Components/Events/Events"
import Sidebar from "../../Components/Sidebar/Sidebar"

function EventPage() {
    const menuData = [
        {
            id: 10893,
            name: "მთავარი",
            link: "/"
        }
    ]

    return (
        <>
            <Sidebar data={menuData}/>
            <Events />
        </>
    )
}

export default EventPage