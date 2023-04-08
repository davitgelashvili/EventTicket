import { useEffect, useState } from "react"

const EventPrice = ({item}) => {
    const [price, setPrice] = useState('')

    useEffect(()=>{
        if(item?.ticketBasket.basket_1 > 0) {
            setPrice(item?.priceBasket.basket_1) 
        }else if(item?.ticketBasket.basket_2 > 0) {
            setPrice(item?.priceBasket.basket_2) 
        }else {
            setPrice(item?.priceBasket.basket_3) 
        }
    }, [item])

    return (
        <h1>
            ფასი: 
            <span>
            {price} ლარი
            </span>
        </h1>
    )
}

export default EventPrice