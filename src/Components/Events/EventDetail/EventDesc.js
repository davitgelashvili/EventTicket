import Style from './EventDetail.module.css'

function EventDesc({item}){
    return (
    <div>
        <h1 className={`${Style['detail__body--title']}`}>
            {item?.name}
        </h1>
        <div className={`${Style['detail__body--text']}`}>
            {item?.body}
        </div>
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
    </div>
    )
}

export default EventDesc