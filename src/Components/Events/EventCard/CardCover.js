import Style from './EventCard.module.css'

function CardCover({image}){
   
    return (
        <figure className={`${Style['card__cover']}`}>
            <img src={`${image}`} alt="cover" className={`${Style['card__cover--img']}`} />
        </figure>
    )
}

export default CardCover