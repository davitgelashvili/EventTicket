import Style from './EventCard.module.css'

function CardBody({props}){
    let month = new Date(props.date).getMonth() +1
    let date = new Date(props.date).getDate()
    let year = new Date(props.date).getFullYear()

    if(month < 10){
        month = 0+''+month
    }

    if(date < 10){
        date = 0+''+date
    }

    switch (month) {
        case '05':
            month = 'MAY'
            break;
        case '06':
            month = 'JUN'
            break;
        case '07':
            month = 'JUL'
            break;
        case '08':
            month = 'AUG'
            break;
        case '09':
            month = 'SEP'
            break;
        case '10':
            month = 'OPT'
            break;
        case '11':
            month = 'NOV'
            break;
        default:
            month = 'DEC'
            break;
    }

    let nowTime = new Date(month+'/'+date+'/'+year).getTime()
   
    return (
        <div className={`${Style['card__body']}`}>
            <div className={`${Style['card__date']}`}>
                <p className={`${Style['card__date--name']}`}>{month}</p>
                <p className={`${Style['card__date--time']}`}>{date}</p>
            </div>
            <div>
                <h1 className={`${Style['card__title']}`}>{props.title}</h1>
                <h3 className={`${Style['card__price']}`}>{props.price} ლარი</h3>
            </div>
        </div>
    )
}

export default CardBody