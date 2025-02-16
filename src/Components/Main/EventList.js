import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import EventCard from '../Events/EventCard/EventCard'
import Style from './Main.module.css'
import { useContext, useEffect, useState } from 'react';
import { EventContext } from '../Events/EventsContext';
import { Col, Row } from 'react-bootstrap';
import EventLoader from '../../module/Loader/EventLoader/EventLoader';

function EventList() {
    const {eventsData} = useContext(EventContext)
    const [data, setData] = useState([]) 
    const [load, setLoad] = useState(true)

    useEffect(()=>{
        setData(eventsData)
        setTimeout(() => {
            setLoad(false)
        }, 500);
    },[eventsData])

    return (
        <div className='container'>
            <div className={Style.list}>
                <div className='row'>
                    {load && (
                        <EventLoader />
                    )}
                    {data && !load && data?.map(item => {
                        return (
                            <div className='col-md-6 col-lg-4' key={item.id}>
                                <EventCard props={item}/>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
        // <Swiper slidesPerView={3}><SwiperSlide key={item._id}></SwiperSlide></Swiper>
    )
}

export default EventList