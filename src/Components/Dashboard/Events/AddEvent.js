import { useEffect, useState } from 'react'
import { postData } from '../../../http/getApi'
import UiInput from './../../Ui/UiInput/UiInput'

const AddEvent = () => {
    const [body, setBody] = useState({
        image: '',
        title: '',
        linkName: '',
        date: '',
        finishDate: '',
        description: '',
        earlyBirdPrice: '',
        fristBasketPrice: '',
        secondBasketPrice: '',
        theerdBasketPrice: '',
        doorPrice: '',
        countFirstBasket: '',
        countSecondBasket: '',
        countTheerdBasket: '',
        organizatorID: '',
    })

    return (
        <>
            <UiInput 
                title='Event image'
                type='text'
                value={body.image}
                placeholder='Event'
                onChangeInput={(e) => setBody({...body, image: e.target.value})}
            />
            <UiInput 
                title='Event Title'
                type='text'
                value={body.title}
                placeholder='Event'
                onChangeInput={(e) => setBody({...body, title: e.target.value})}
            />
            <UiInput 
                title='Event Link Name'
                type='text'
                value={body.linkName}
                placeholder='Event'
                onChangeInput={(e) => setBody({...body, linkName: e.target.value})}
            />
            <UiInput 
                title='Event date'
                type='date'
                value={body.date}
                placeholder='Event'
                onChangeInput={(e) => setBody({...body, date: e.target.value})}
            />
            <UiInput 
                title='Event Finish Date'
                type='date'
                value={body.finishDate}
                placeholder='Event'
                onChangeInput={(e) => setBody({...body, finishDate: e.target.value})}
            />
            <UiInput 
                title='Event description'
                type='text'
                value={body.description}
                placeholder='Event'
                onChangeInput={(e) => setBody({...body, description: e.target.value})}
            />
            <UiInput 
                title='Early Bird price'
                type='text'
                value={body.earlyBirdPrice}
                placeholder='Event'
                onChangeInput={(e) => setBody({...body, earlyBirdPrice: e.target.value})}
            />
            <UiInput 
                title='Fisrt Basket Price'
                type='text'
                value={body.fristBasketPrice}
                placeholder='Event'
                onChangeInput={(e) => setBody({...body, fristBasketPrice: e.target.value})}
            />
            <UiInput 
                title='Second Basket Price'
                type='text'
                value={body.secondBasketPrice}
                placeholder='Event'
                onChangeInput={(e) => setBody({...body, secondBasketPrice: e.target.value})}
            />
            <UiInput 
                title='Theerd Basket Price'
                type='text'
                value={body.theerdBasketPrice}
                placeholder='Event'
                onChangeInput={(e) => setBody({...body, theerdBasketPrice: e.target.value})}
            />
            <UiInput 
                title='Door Price'
                type='text'
                value={body.doorPrice}
                placeholder='Event'
                onChangeInput={(e) => setBody({...body, doorPrice: e.target.value})}
            />
            <UiInput 
                title='Count First Basket Ticket'
                type='text'
                value={body.countFirstBasket}
                placeholder='Event'
                onChangeInput={(e) => setBody({...body, countFirstBasket: e.target.value})}
            />
            <UiInput 
                title='Count Second Basket Ticket'
                type='text'
                value={body.countSecondBasket}
                placeholder='Event'
                onChangeInput={(e) => setBody({...body, countSecondBasket: e.target.value})}
            />
            <UiInput 
                title='Count Theerd Basket Ticket'
                type='text'
                value={body.countTheerdBasket}
                placeholder='Event'
                onChangeInput={(e) => setBody({...body, countTheerdBasket: e.target.value})}
            />
             <UiInput 
                title='Event Organizator'
                type='text'
                value={body.organizatorID}
                placeholder='Event'
                onChangeInput={(e) => setBody({...body, organizatorID: e.target.value})}
            />
            <button onClick={() => {
                postData('/events/create', 'post', {
                    image: body.image,
                    title: body.title,
                    linkName: body.linkName,
                    date: body.date,
                    finishDate: body.finishDate,
                    description: body.description,
                    earlyBirdPrice: body.earlyBirdPrice,
                    fristBasketPrice: body.fristBasketPrice,
                    secondBasketPrice: body.secondBasketPrice,
                    theerdBasketPrice: body.theerdBasketPrice,
                    doorPrice: body.doorPrice,
                    countFirstBasket: body.countFirstBasket,
                    countSecondBasket: body.countSecondBasket,
                    countTheerdBasket: body.countTheerdBasket,
                    organizatorID: body.organizatorID,
                })
            }}>
                დამატება
            </button>
        </>
    )
}

export default AddEvent