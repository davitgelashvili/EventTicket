import 'swiper/css';
import { useContext, useEffect, useState } from 'react'
import { EventContext } from '../Events/EventsContext'
import EventList from './EventList';

function Main() {
    
    return (
        <>
            <EventList />
        </>
    )
}

export default Main