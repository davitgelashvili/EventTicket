import { useEffect, useState } from "react"

const EventPrice = ({item}) => {
    const [price, setPrice] = useState('')

    useEffect(()=>{
        if(item?.ticket_basket_1 > 0) {
            setPrice(item?.price_basket_1) 
        }else if(item?.ticket_basket_2 > 0) {
            console.log(item.price_basket_2)
            setPrice(item?.price_basket_2) 
        }else {
            setPrice(item?.price_basket_3) 
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