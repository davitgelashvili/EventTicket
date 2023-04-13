import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { getApi, getData, postApi, putApi, sendData, sendTicket, ticketApi } from '../../../http/getApi'
import { userAction } from '../../../store/userData'
import { EventContext } from '../EventsContext'
import UiInput from './../../Ui/UiInput/UiInput'


function EventFooter({item}){
    const {ticketsData} = useContext(EventContext)
    const filtered = ticketsData.filter( data => data)
    const [buyTicketError, setBuyTicketError] = useState(null)
    const [thisTicketBuy, setThisTicketBuy] = useState(false)
    const user = useSelector(state => state.userData)
    const cookies = new Cookies()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let month = new Date().getMonth() +1
    let date = new Date().getDate()
    let year = new Date().getFullYear()

    function changeBasket(item){
        if(item.ticket_basket_1 > 0){
            sendData(`events/${item.id}`, 'put', {
                ...item,
                ticket_basket_1: item.ticket_basket_1 - 1,
            })
        }else if(item.ticket_basket_2 > 0){
            sendData(`events/${item.id}`, 'put', {
                ...item,
                ticket_basket_2: item.ticket_basket_2 - 1,
            })
        }else {
            sendData(`events/${item.id}`, 'put', {
                ...item,
                ticket_basket_3: item.ticket_basket_3 - 1
            })
        }
    }

    function getBuyTicket(item) {
        getData(`users/${cookies.get('sessionID')}`).then(res => {
            const data = res?.data
            console.log('res',res.data)
            const ticketNumber = JSON.parse(user.userId+''+item.id)
            
            function goFunct(){
                const newPrice = data.balance - item.price
                sendData(`users/${user.userId}`, 'PUT', {
                    ...data,
                    "balance": newPrice,
                })
                dispatch(userAction.changeBalance(newPrice))
                sendTicket('tickets', 'post', {
                    "userId": Number(data.id),
                    "eventId": Number(item.id),
                    "eventName": item.name,
                    "userfullName": data.fullName,
                    "userName": data.userName,
                    "active_date": item.active_date,
                    "status": true,
                    "ticketNumber": Number(ticketNumber)
                })
            }

            if(item.price <= user.balance && user.status){
                goFunct()
            }else if(!user.status){
                setBuyTicketError('თქვენ არ ხართ ვერიფიცირებული')
            }else {
                setBuyTicketError('თანხა არ არის საკმარისი')
            }
        })
    }

    if(month < 10){
        month = 0+''+month
    }

    if(date < 10){
        date = 0+''+date
    }

    let nowTime = new Date(month+'/'+date+'/'+year).getTime()

    const eventTime = item?.active_date
  
  
    return (
        <>
        {eventTime > nowTime && <strong>{buyTicketError}</strong>}
        {eventTime > nowTime && thisTicketBuy && <strong>ეს ივენთი უკვე ნაყიდი გაქვს</strong>}
        {
            eventTime > nowTime && !thisTicketBuy && (
                <UiInput 
                    type='submit'
                    value={'Buy Tickets'}
                    onClickInput={() => {
                        getBuyTicket(item && item)
                        changeBasket(item && item)
                        // navigate("/ticket")
                    }}
                    className={'dark'}
                />
                )
        }
            {/* <UiInput 
                type='submit'
                value={'Add to cart'}
                onClickInput={setCart}
            /> */}
        </>
    )
}

export default EventFooter