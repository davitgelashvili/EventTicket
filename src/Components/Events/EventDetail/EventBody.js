import { useEffect } from 'react'
import Style from './EventDetail.module.css'
import EventPrice from './EventPrice'

function EventBody({item}){
    return (
        <>  
        <figure className={`${Style['detail__cover']}`}>
            <img src={item?.image} alt="cover" className={`${Style['detail__cover--img']}`} />
        </figure>
        <div className={`${Style['detail__body']}`}>
            <div className={`${Style['detail__body--left']}`}>
                <h1 className={`${Style['detail__body--title']}`}>
                    {item?.name}
                </h1>
                <div className={`${Style['detail__body--text']}`}>
                    {item?.body}
                </div>
            </div>
            <div className={`${Style['detail__body--right']}`}>
                <p>
                    <span>{item?.date_month} </span>
                    <span>{item?.date_time}</span>
                </p>
                <p>
                    {item?.location}
                </p>
                <p>
                    კალათა I - <span>{item?.priceBasket.basket_1} ლ</span>
                </p>
                <p>
                    კალათა II - <span>{item?.priceBasket.basket_2} ლ</span>
                </p>
                <p>
                    კალათა III - <span>{item?.priceBasket.basket_3} ლ</span>
                </p>
                <EventPrice item={item && item}/>
            </div>
        </div>
        </>
    )
}

export default EventBody