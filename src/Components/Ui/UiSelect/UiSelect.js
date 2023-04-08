import Style from './../UiInput/UiInput.module.css'

const UiSelect = ({title, onChangeInput, onClickInput, data, className}) => {
    return (
        <label className={`${Style['input']}`}>
            {title && (
                <p className={Style['input__title']}>{title}</p>
            )}
            <select
                className={`${Style['input__value']} ${className && Style[className]}`}
                onChange={onChangeInput && onChangeInput}
                onClick={onClickInput && onClickInput}
                >
                    {data && data.map(item => {
                        return (
                            <option key={item.id} value={item.value}>{item.text}</option>
                        )
                    })}
            </select>
        </label>
    )
}

export default UiSelect