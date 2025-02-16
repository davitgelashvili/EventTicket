import Style from './UiInput.module.css'

const UiInput = ({title, type, value, placeholder, onChangeInput, onClickInput, className}) => {
    if(type === 'submit') {
        return (
            <div>
                 <p className={Style['input__title']}>{title}</p>
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder && placeholder}
                    className={`${Style['input__value']} ${className && Style[className]}`}
                    onChange={onChangeInput && onChangeInput}
                    onClick={onClickInput && onClickInput}
                />
            </div>
        )
    }else {
        return (
            <label className={`${Style['input']}`}>
                {title && (
                    <p className={Style['input__title']}>{title}</p>
                )}
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder && placeholder}
                    className={`${Style['input__value']} ${className && Style[className]}`}
                    onChange={onChangeInput && onChangeInput}
                    onClick={onClickInput && onClickInput}
                    />
            </label>
        )
    }
}

export default UiInput