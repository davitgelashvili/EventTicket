import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import EventCard from '../Events/EventCard/EventCard'

function EventList({filtered, title}) {
    if(title === 'new') {
        return (
            <>
            {filtered && filtered.map(item => {
                return (
                    <div key={item.id}>
                        <EventCard key={item.id} props={item}/>
                    </div>
                )
            })}
            </>
        )
    }

    if(title === 'old') {
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
}

export default EventList