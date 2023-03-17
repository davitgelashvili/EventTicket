import Style from './../Header.module.css'

function Search() {
    return (
        <form className={`${Style['header__search']}`}>
            <input type={'text'} className={`${Style['header__search--input']}`}/>
            <button className={`${Style['header__search--btn']}`}>
                search
            </button>
        </form>
    )
}

export default Search