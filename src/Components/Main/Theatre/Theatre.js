import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useContext } from 'react'
import { EventContext } from '../../Events/EventsContext'
import EventCard from '../../Events/EventCard/EventCard'

function Theatre() {
    const {data} = useContext(EventContext)
    const filtered = data.filter(item => item.category === 'theatre')

    return (
        <Swiper slidesPerView={3}>
            {filtered && filtered.map(item => {
                return (
                    <SwiperSlide key={item.id}>
                        <EventCard props={item}/>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default Theatre