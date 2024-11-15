import Style from './EventDetail.module.css'

const EventPrice = ({item}) => {
    return (
        <div className={Style.sidebar}>
            <p>
                <span>{item?.date} </span>
                <span>{item?.finishDate}</span>
            </p>
            <p>
                {item?.location}
            </p>
            <ul className={Style.prices}>
                <li>
                    Early Bird: <span>{item?.earlyBirdPrice} ლ</span>
                </li>
                <li>
                    კალათა I: <span>{item?.fristBasketPrice} ლ</span>
                </li>
                <li>
                    კალათა II: <span>{item?.secondBasketPrice} ლ</span>
                </li>
                <li>
                    კალათა III: <span>{item?.theerdBasketPrice} ლ</span>
                </li>
                <li>
                    Door: <span>{item?.doorPrice} ლ</span>
                </li>
                <li className={Style.active}>
                    {item?.price} ლარი
                </li>
            </ul>
        </div>
    )
}

export default EventPrice