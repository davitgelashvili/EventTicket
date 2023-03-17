import Style from './Content.module.css'

function Content({children}){
    return (
        <div className={`${Style['content']}`}>
            {children}
        </div>
    )
}

export default Content