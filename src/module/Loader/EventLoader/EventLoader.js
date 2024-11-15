import { Col } from "react-bootstrap"
import EventCard from "../../../Components/Events/EventCard/EventCard"

const EventLoader = () => {
    const data = [
        1,2
    ]

    return (
        <>
        {data.map((item,key) => {
            return (
                <Col xs={3} key={item+key}>
                    <EventCard props={item}/>
                </Col>
            )
        })}
        </>
    )
}

export default EventLoader