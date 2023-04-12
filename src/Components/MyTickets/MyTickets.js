import { QRCodeCanvas } from "qrcode.react"
import { useContext } from "react"
import Cookies from "universal-cookie"
import { EventContext } from "../Events/EventsContext"
import Style from './MyTickets.module.css'

const MyTickets = () => {
    const cookies = new Cookies()
    const {ticketsData} = useContext(EventContext)
    let month = new Date().getMonth() +1
    let date = new Date().getDate()
    let year = new Date().getFullYear()
    const filtered = ticketsData.filter( data => data.userId === +cookies.get('sessionID'))

    console.log(ticketsData)
    
    if(month < 10){
        month = 0+''+month
    }

    if(date < 10){
        date = 0+''+date
    }
    
    let nowTime = new Date(month+'/'+date+'/'+year).getTime()

    const sorted = filtered.sort( (a,b) => {
        return b?.active_date > a?.active_date
    })


    return (
        <>
        {sorted?.map(item => {
            const eventTime = new Date(item?.active_date).getTime()

            return (
                <div key={item.id} className={`${Style['ticket']}`}>
                    
                    <div className={`${Style['ticket-qr']}`}>
                        {console.log(eventTime > nowTime , item.status)}
                        {
                            eventTime > nowTime && item.status ? (
                                <QRCodeCanvas value={JSON.stringify(item.ticketNumber)} />
                            ) : (
                                <div className={`${Style['ticket-qr-false']}`}>
                                    <h1>გამოყენებულია</h1>
                                </div>
                            )
                        }
                    </div>
                    <div className={`${Style['ticket-text']}`}>
                        <h1>{item?.eventName}</h1>
                        <p>date: {item?.active_date}</p>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default MyTickets