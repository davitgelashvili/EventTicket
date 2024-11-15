import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { EventContext } from '../EventsContext'
import Style from './EventDetail.module.css'
import EventFooter from './EventFooter'
import EventCover from './EventCover'
import EventDesc from './EventDesc'
import EventPrice from './EventPrice'
import { Col, Row } from 'react-bootstrap'


function EventDetail(){
    const {eventsData} = useContext(EventContext)
    const {linkName} = useParams()
    const filtered = eventsData?.filter( item => item?.linkName === linkName)
    const data = filtered?.[0]
    console.log(666,eventsData)
  
    return (
        <div className={`${Style['detail']}`} key={'dsgf45gds45'}>
            <EventCover item={data}/>
            <Row>
                <Col xl={9}>
                    <EventDesc item={data}/>
                </Col>
                <Col xl={3}>
                    <EventPrice item={data}/>
                    <EventFooter item={data}/>
                </Col>
            </Row>
        </div>
    )
}

export default EventDetail