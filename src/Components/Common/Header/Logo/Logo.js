import Style from './../Header.module.css'

function Logo() {
    return (
        <h1 className={`${Style['header__logo']}`}>
            TICKETTRADE
        </h1>
    )
}

export default Logo