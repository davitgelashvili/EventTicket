import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { getApi, postApi, putApi } from '../../../http/getApi'
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

    
    useEffect(()=>{
        filtered.map(id => id.eventId === item.id && setThisTicketBuy(true))
    }, [])


    // const setCart = ()=> {
    //     const getItem = localStorage.getItem('items')
    //     if(getItem !== null) {
    //         const getNewItem = [...JSON.parse(getItem), ...item]
    //         localStorage.setItem('items', JSON.stringify(getNewItem));
    //     }else {
    //         setCartItem(item)
    //         localStorage.setItem('items', JSON.stringify(item));
    //     }
    // }
    function changeBasket(item){
        if(item.ticketBasket.basket_1 > 0){
            putApi(`events/${item.id}`, {
                ...item,
                ticketBasket: {
                    basket_1: item.ticketBasket.basket_1 - 1,
                    basket_2: item.ticketBasket.basket_2,
                    basket_3: item.ticketBasket.basket_3
                }
            })
        }else if(item.ticketBasket.basket_2 > 0){
            putApi(`events/${item.id}`, {
                ...item,
                ticketBasket: {
                    basket_1: item.ticketBasket.basket_1,
                    basket_2: item.ticketBasket.basket_2 - 1,
                    basket_3: item.ticketBasket.basket_3
                }
            })
        }else {
            putApi(`events/${item.id}`, {
                ...item,
                ticketBasket: {
                    basket_1: item.ticketBasket.basket_1,
                    basket_2: item.ticketBasket.basket_2,
                    basket_3: item.ticketBasket.basket_3 - 1
                }
            })
        }
    }

    function getBuyTicket(item) {
        getApi(`users/${cookies.get('sessionID')}`).then(res => {
            const data = res?.data
            const ticketNumber = JSON.parse(user.userId+''+item.id)
            
            function goFunct(){
                const newPrice =  data.balance - item.price
                putApi(`users/${user.userId}`, {
                    ...data,
                    "ticketNumber": ticketNumber,
                    "balance": newPrice,
                })
                dispatch(userAction.changeBalance(newPrice))
                postApi(`tickets/`, {
                    "userId": data.id,
                    "eventId": item.id,
                    "ticketNumber": ticketNumber,
                    "eventName": item.name,
                    "userfullName": data.fullName,
                    "userName": data.userName,
                    "active_date": item.active_date,
                    "status": true
                })
            }

            if(item.price <= user.balance && user.verified){
                goFunct()
            }else if(!user.verified){
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

    const eventFullDate = item?.active_date
    const eventDate = eventFullDate?.split("/")
    const eventTime = new Date(eventDate && eventDate[0]+'/'+eventDate[1]+'/'+eventDate[2]).getTime()
  
  
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
                        navigate("/ticket")
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