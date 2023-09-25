import React from 'react'

const CustomInput = (props) => {
    const { type, id, name, placeholder, className, onCh, onBl, val } = props;
    return (
        <div className="">
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                className={`form-control py-2 ${className}`}
                value={val}
                onChange={onCh}
                onBlur={onBl}
            />
        </div>
    )
}

export default CustomInput