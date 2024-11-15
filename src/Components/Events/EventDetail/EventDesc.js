import Style from './EventDetail.module.css'

function EventDesc({item}){
    return (
        <div className={`${Style['detail__body']}`}>
            <h1 className={`${Style['detail__body--title']}`}>
                {item?.title}
            </h1>
            <div className={`${Style['detail__body--text']}`}>
                {item?.description}
            </div>
        </div>
    )
}

export default EventDesc