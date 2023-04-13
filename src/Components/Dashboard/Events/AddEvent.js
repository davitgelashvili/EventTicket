import { useEffect, useState } from 'react'
import { sendData } from '../../../http/getApi'
import UiInput from './../../Ui/UiInput/UiInput'

const AddEvent = () => {
    const [name, setname] = useState('')
    const [body, setbody] = useState('')
    const [image, setimage] = useState('')
    const [active_date, setactive_date] = useState('')
    const [date_time, setdate_time] = useState('')
    const [link_name, setlink_name] = useState('')
    const [price, setprice] = useState('')
    const [price_basket_1, setprice_basket_1] = useState('')
    const [price_basket_2, setprice_basket_2] = useState('')
    const [price_basket_3, setprice_basket_3] = useState('')
    const [ticket_basket_1, setticket_basket_1] = useState('')
    const [ticket_basket_2, setticket_basket_2] = useState('')
    const [ticket_basket_3, setticket_basket_3] = useState('')

    return (
        <>
            <UiInput 
                title='Event name'
                type='text'
                value={name}
                placeholder='Event'
                onChangeInput={(e) => setname(e.target.value)}
            />
            <UiInput 
                title='Event description'
                type='text'
                value={body}
                placeholder='Event'
                onChangeInput={(e) => setbody(e.target.value)}
            />
            <UiInput 
                title='Event image'
                type='text'
                value={image}
                placeholder='Event'
                onChangeInput={(e) => setimage(e.target.value)}
            />
            <UiInput 
                title='Event Date'
                type='text'
                value={active_date}
                placeholder='Event'
                onChangeInput={(e) => setactive_date(e.target.value)}
            />
            <UiInput 
                title='Event date'
                type='text'
                value={date_time}
                placeholder='Event'
                onChangeInput={(e) => setdate_time(e.target.value)}
            />
            <UiInput 
                title='Event Link title'
                type='text'
                value={link_name}
                placeholder='Event'
                onChangeInput={(e) => setlink_name(e.target.value)}
            />
            <UiInput 
                title='Event price'
                type='text'
                value={price}
                placeholder='Event'
                onChangeInput={(e) => setprice(e.target.value)}
            />
            <UiInput 
                title='Event price 1 basket'
                type='text'
                value={price_basket_1}
                placeholder='Event'
                onChangeInput={(e) => setprice_basket_1(e.target.value)}
            />
            <UiInput 
                title='Event price 2 basket'
                type='text'
                value={price_basket_2}
                placeholder='Event'
                onChangeInput={(e) => setprice_basket_2(e.target.value)}
            />
            <UiInput 
                title='Event price 3 basket'
                type='text'
                value={price_basket_3}
                placeholder='Event'
                onChangeInput={(e) => setprice_basket_3(e.target.value)}
            />
            <UiInput 
                title='Event tickets basket 1'
                type='text'
                value={ticket_basket_1}
                placeholder='Event'
                onChangeInput={(e) => setticket_basket_1(e.target.value)}
            />
            <UiInput 
                title='Event tickets basket 2'
                type='text'
                value={ticket_basket_2}
                placeholder='Event'
                onChangeInput={(e) => setticket_basket_2(e.target.value)}
            />
            <UiInput 
                title='Event tickets basket 3'
                type='text'
                value={ticket_basket_3}
                placeholder='Event'
                onChangeInput={(e) => setticket_basket_3(e.target.value)}
            />
            <button onClick={() => {
                sendData('events', 'post', {
                    name: name,
                    body: body,
                    image: image,
                    active_date: active_date,
                    date_time: date_time,
                    link_name: link_name,
                    price: price,
                    price_basket_1: price_basket_1,
                    price_basket_2: price_basket_2,
                    price_basket_3: price_basket_3,
                    ticket_basket_1: ticket_basket_1,
                    ticket_basket_2: ticket_basket_2,
                    ticket_basket_3: ticket_basket_3
                })
            }}>
                დამატება
            </button>
        </>
    )
}

export default AddEvent