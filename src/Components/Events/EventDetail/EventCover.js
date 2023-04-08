import Style from './EventDetail.module.css'

function EventCover({item}){
    return (
        <figure className={`${Style['detail__cover']}`}>
            <img src={item?.image} alt="cover" className={`${Style['detail__cover--img']}`} />
        </figure>
    )
}

export default EventCover