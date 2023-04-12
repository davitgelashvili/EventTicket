import { useRef, useState } from 'react'
import QrReaded from 'react-qr-scanner'
import { getTicket, sendTicket } from '../../http/getApi'
import UiInput from '../Ui/UiInput/UiInput'
import Style from './TicketScanner.module.css'

const TicketScanner = () => {
    const ref = useRef()
    const [statusInfo, setStatusInfo] = useState(false)
    const [eventTitle, setEventTitle] = useState('')
    const [userTitle, setUserTitle] = useState('')
    const [statusText, setStatusText] = useState('')

    function erorrScann(e){
        return console.log(e)
    }

    function handleScann(e){
        if(e !== null && !statusInfo) {
            const ticketId = JSON.parse(e.text);
            getTicket(`tickets?ticketNumber=${ticketId}`).then(res => {
                const data = res.data[0]

                if(data.status === true){
                    setEventTitle(data.eventName)
                    setUserTitle(data.userfullName)
                    sendTicket(`tickets/${data.id}`, 'put', {
                        ...data,
                        "status": false,
                    })
                    setStatusText('ბილეთი წარმატებით გატარდა')
                    setStatusInfo(true)
                }else{
                    setStatusText('ბილეთი არ მოიძებნა')
                    setStatusInfo(true)
                }
            })
        }
    }

    return (
        <div className={`${Style['scaner']}`}>
            <QrReaded 
                ref={ref.current}
                delay={300}
                constraints={{
                    facingMode: 'environment'
                }}
                style={{ width: '100%' }}
                onError={erorrScann}
                onScan={handleScann}
            />

            {statusInfo === true && (
                <div className={`${Style['scaner-popup']}`}>
                    <h3>{eventTitle}</h3>
                    <h3>{userTitle}</h3>
                    <h1 className={`${Style['scaner-popup-success']}`}>{statusText}</h1>
                    <UiInput 
                        type='submit'
                        value={"გათიშვა"}
                        onClickInput={() => {
                            setStatusInfo(false)
                        }}
                        className="dark"
                    />
                </div>
            )}
        </div>
    )
}

export default TicketScanner