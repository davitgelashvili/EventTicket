import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import EventCard from '../Events/EventCard/EventCard'
import Style from './Main.module.css'

function EventList({filtered, title}) {
    console.log(filtered)
    if(title === 'new') {
        return (
            <div className={`${Style['new-events']}`}>
            {filtered && filtered.map(item => {
                return (
                    <div key={item.id} className={`${Style['new-events-item']}`}>
                        <EventCard key={item.id} props={item}/>
                    </div>
                )
            })}
            </div>
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