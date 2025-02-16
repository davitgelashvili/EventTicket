import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { EventContext } from '../EventsContext'
import Style from './EventDetail.module.css'
import EventFooter from './EventFooter'
import EventCover from './EventCover'
import EventDesc from './EventDesc'
import EventPrice from './EventPrice'
import { Col, Row } from 'react-bootstrap'
import { postData } from '../../../http/getApi'


function EventDetail(){
    const {eventsData} = useContext(EventContext)
    const {linkName} = useParams()
    const filtered = eventsData?.filter( item => item?.linkName === linkName)
    const data = filtered?.[0]
  
    return (
        <div className={`${Style['detail']}`} key={'dsgf45gds45'}>
            <div className='container'>
                <EventCover item={data}/>
                <div className='row'>
                    <div className='col-md-8 col-lg-9'>
                        <EventDesc item={data}/>
                    </div>
                    <div className='col-md-4 col-lg-3'>
                        <EventPrice item={data}/>
                        <EventFooter item={data}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetail